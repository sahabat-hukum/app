import { database } from "../config";

export default class PostDetail {
  static collection() {
    return database.collection("post-details");
  }

  static async createPostDetail() {
    const detail = await this.collection().insertOne({ vote: 0, answer: [] });
    return detail.insertedId;
  }
}
