import { database } from "../config";

export default class Advocate {
  static collection() {
    return database.collection("advocates");
  }

  static async findByNIA(NIA) {
    const user = await this.collection().findOne({ NIA });
    return user;
  }

  static async addAdvocate(newAdvocate) {
    const result = registerSchema.safeParse(newAdvocate);
    if (!result.success) {
      throw result.error;
    }

    const existingNIA = await this.findByNIA(newAdvocate.NIA);
    if (existingNIA) {
      throw new Error("NIA sudah terdaftar");
    }

    const user = await this.collection().insertOne(newAdvocate);

    return {
      _id: user.insertedId,
      ...newAdvocate,
    };
  }
  static async getAdvocates() {
    return await database
      .collection("users")
      .find({ role: "Advokat" })
      .limit(10)
      .toArray();
  }

  static async getAdvocateById(_id) {
    return await advocateCollection.findOne({ _id: ObjectId(_id) });
  }
}
