import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/addQuestion")) {
    // console.log("masuk middleware")
    const authorization = cookies().get("Authorization");
    // console.log(authorization, "<<<")
    if (!authorization) {
      return NextResponse.json(
        {
          message: "Anda harus login dahulu",
        },
        {
          status: "401",
        }
      );
    }

    const token = authorization.value.split(" ")[1];
    // console.log(token, "<<< token")

    if (!token) {
      return NextResponse.json(
        {
          message: "Anda harus login dahulu",
        },
        {
          status: 401,
        }
      );
    }

    const secret = new TextEncoder().encode("verysecret");
    const jwt = token;

    const { payload } = await jwtVerify(jwt, secret);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload._id);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    return response;
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    const authorization = cookies().get("Authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          message: "Anda harus login dahulu",
        },
        {
          status: "401",
        }
      );
    }

    const token = authorization.value.split(" ")[1];
    // console.log(token, "<<< token")

    if (!token) {
      return NextResponse.json(
        {
          message: "Anda harus login dahulu",
        },
        {
          status: 401,
        }
      );
    }

    const secret = new TextEncoder().encode("verysecret");
    const jwt = token;

    const { payload } = await jwtVerify(jwt, secret);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload._id);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    return response;
  }
}
