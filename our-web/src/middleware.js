import { cookies } from "next/headers" 
export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api/add-post')) {
    // console.log("masuk middleware")
    const authorization = cookies().get("Authorization")
    console.log(authorization, "<<< auth")
  }
}