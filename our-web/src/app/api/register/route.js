const { NextResponse } = require("next/server");
const { ZodError } = require("zod");
const User = require("../../../../database/models/user").default;

export async function POST(request) {
  try {
    const body = await request.json();

    const {email, mobile} = body

    const newUser = await User.addUser(body);

    return NextResponse.json({
      message: "User berhasil terdaftar",
      email,
      mobile
    }, { status: 201 });
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      const err = error.issues[0].message;

      return NextResponse.json({
        error: err,
      }, { status: 400 });
    }

    if (error.message === 'Email sudah terdaftar' || error.message === 'No Handphone sudah terdaftar') {
      return NextResponse.json({
        error: error.message,
      }, { status: 409 });
    }

    return NextResponse.json({
      error: 'Internal Server Error',
    }, { status: 500 });
  }
}
