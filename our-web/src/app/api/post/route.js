import { NextResponse } from "next/server";
import Post from "../../../../database/models/post";

export async function GET() {
  try {
    const data = await Post.getPost();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
