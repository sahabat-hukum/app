import { cookies } from "next/headers" 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api/register')) {
    console.log("masuk middleware")
  }
}