import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// export function middleware(request) {
//   // const cookieStore = cookies();
//   // const sessionToken = cookieStore.get('next-auth.session-token');
//   // const { pathname } = request.nextUrl;
//   // // Redirect to login if no session token and not on login page or home page
//   // if (!sessionToken && pathname !== '/login' && pathname !== '/') {
//   //   const url = new URL('/login', request.url);
//   //   return NextResponse.redirect(url);
//   // }

//   // Allow access if on login page or home page, or if session token is present
//   //return NextResponse.next();
// }

export { default } from "next-auth/middleware";

export const config = {
  matcher: ['/jobs/:path*'],
};