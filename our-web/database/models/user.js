const { hashPassword } = require("../helpers/bcrypt");
const { database } = require("../config/index");
const { z } = require("zod");

export const registerSchema = z.object({
  name: z.string().nonempty("Nama tidak boleh kosong"),
  email: z.string().email("Format email salah"),
  mobile: z.string().min(10, "No Handphone minimal 10 digit").max(13, "No handphone maksimal 13 digit").regex(/^\d+$/, "No handphone hanya boleh berisi nomor"),
  password: z.string().min(6, "Password minimal 6 karakter").nonempty("Password tidak boleh kosong")
});

export const loginSchema = z.object({
  identifier: z.union([
    z.string().email("Format email salah"),
    z.string().min(10, "No Handphone minimal 10 digit").max(13, "No handphone maksimal 13 digit").regex(/^\d+$/, "No handphone hanya boleh berisi nomor")
  ]).nonempty("Email/No Handphone tidak boleh kosong"),
  password: z.string().min(6, "Password minimal 6 karakter").nonempty("Password tidak boleh kosong")
})

export default class User {
  static collection() {
    return database.collection("users");
  }

  static async findByEmail(email) {
    const user = await this.collection().findOne({ email });
    return user;
  }

  static async findByMobile(mobile) {
    const user = await this.collection().findOne({ mobile });
    return user;
  }

  static async findByIdentifier(identifier) {
    if (z.string().email().safeParse(identifier).success) {
      return await this.findByEmail(identifier)
    }
    return await this.findByMobile(identifier)
  }

  static async addUser(newUser) {

    const result = registerSchema.safeParse(newUser);
    if (!result.success) {
      throw result.error;
    }

    const existingEmail = await this.findByEmail(newUser.email)
    if (existingEmail) {
      throw new Error("Email sudah terdaftar")
    }

    const existingMobile = await this.findByMobile(newUser.mobile)
    if (existingMobile) {
      throw new Error("No Handphone sudah terdaftar")
    }

    newUser.password = hashPassword(newUser.password);

    const user = await this.collection().insertOne(newUser);

    return {
      _id: user.insertedId,
      ...newUser
    };
  }
}
