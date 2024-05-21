import { NextResponse } from "next/server";
import Advocate from "../../../../database/models/advocate";

export async function GET() {
  try {
    const data = await Advocate.getAdvocates();
    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
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
