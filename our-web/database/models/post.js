import { ObjectId } from "mongodb";
import { database } from "../config";
import { z } from "zod";

const postSchema = z.object({
  userId: z.string().nonempty("userId tidak boleh kosong"),
  title: z.string().nonempty("Title tidak boleh kosong"),
  content: z.string().nonempty("Content tidak boleh kosong"),
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

  static async getIdBySlug(slug) {
    const post = await this.collection().findOne({ slug });
    return post._id;
  }

  static async createPost(postInput) {
    const postValidation = postSchema.safeParse(postInput);

    if (!postValidation.success) {
      throw postValidation.error;
    }

    postInput.userId = new ObjectId(String(postInput.userId))
    postInput.vote = 0;
    postInput.slug = slugify(postInput.title);
    postInput.createdAt = new Date();
    const post = await this.collection().insertOne(postInput);

    return {
      _id: post.insertedId,
      ...postInput,
    };
  }

  static async incVote(id) {
    await this.collection().updateOne(
      { _id: ObjectId(String(id)) },
      { $inc: { vote: 1 } }
    );
  }

  static async decVote(id) {
    await this.collection().updateOne(
      { _id: ObjectId(String(id)) },
      { $: { vote: -1 } }
    );
  }
}
