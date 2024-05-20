import { database } from "../config";
import { z } from "zod";
import Answer from "./answer";

const postSchema = z.object({
  userId: z.string().nonempty("Nama tidak boleh kosong"),
  title: z.string().nonempty("Nama tidak boleh kosong"),
  content: z.string().nonempty("Nama tidak boleh kosong"),
});

function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default class Post {
  static collection() {
    return database.collection("posts");
  }

  static async createPost(postInput) {
    const postValidation = postSchema.safeParse(postInput);

    if (!postValidation.success) {
      throw postValidation.error;
    }

    postInput.slug = slugify(postInput.title);
    postInput.createdAt = new Date();

    const post = await this.collection().insertOne(postInput);

    await Answer.createAnswer(post.insertedId);

    return {
      _id: post.insertedId,
      ...postInput,
    };
  }
}
