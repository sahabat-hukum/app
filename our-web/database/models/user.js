const { hashPassword } = require("../helpers/bcrypt");
const { database } = require("../config/index");
const { z } = require("zod");

export const registerSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email format"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits").regex(/^\d+$/, "Mobile number must contain only digits"),
  password: z.string().min(6, "Password must be at least 6 characters long").nonempty("Password is required")
});

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

  static async addUser(newUser) {
    
    const existingEmail = await this.findByEmail(newUser.email)
    if(existingEmail) {
      throw new Error ("Email already exists") 
    }

    const existingMobile = await this.findByMobile(newUser.mobile)
    if(existingMobile) {
      throw new Error ("Mobile number already exists") 
    }

    newUser.password = hashPassword(newUser.password);

    const result = await this.collection().insertOne(newUser);

    return {
      _id: result.insertedId,
      ...newUser
    };
  }
}
