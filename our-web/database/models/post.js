import { database } from "../config";
import { z } from "zod";
import PostDetail from "./postDetail";

const postSchema = z.object({
  userId: z.string().nonempty("Nama tidak boleh kosong"),
  title: z.string().nonempty("Nama tidak boleh kosong"),
  content: z.string().nonempty("Nama tidak boleh kosong"),
});

export default class Post {
  static collection() {
    return database.collection("posts");
  }

  static async createPost(postInput) {
    const postValidation = postSchema.safeParse(postInput);

    if (!postValidation.success) {
      throw postValidation.error;
    }

    const detailId = PostDetail.createPostDetail();
    postInput.detailId = detailId;

    const post = await this.collection().insertOne(postInput);

    return {
      _id: post.insertedId,
      ...postInput,
    };
  }
}
