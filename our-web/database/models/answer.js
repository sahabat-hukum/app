import { ObjectId } from "mongodb";
import { database } from "../config";

export default class Answer {
  static collection() {
    return database.collection("answers");
  }

  static async createAnswer(_id) {
    await this.collection().insertOne({
      postId: ObjectId(String(_id)),
      answers: [],
    });
  }
}
