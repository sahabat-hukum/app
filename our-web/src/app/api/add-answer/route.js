import { NextResponse } from "next/server";
import Answer from "../../../../database/models/answer";

export async function POST(request) {
  try {
    const body = await request.json();

    await Answer.createAnswer(body);

    return NextResponse.json(
      {
        message: "Answer berhasil terdaftar",
      },
      { status: 201 }
    );
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
