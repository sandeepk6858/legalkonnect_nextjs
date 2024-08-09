export { default } from "next-auth/middleware"
// import { NextResponse } from 'next/server';
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import VerifyToken from '@/actions/verifyToken';
// import RefreshToken from '@/actions/refreshToken';

// export async function middleware(req) {
//   // Retrieve cookies from the request
//   const session = await getServerSession(authOptions);
//   console.log("session",session);
  
//   // If sessionCookieAuth is true, validate token
//   // if (session) {
//   //   const result = await VerifyToken(token);
//   //   if (result?.success) {
//   //     return NextResponse.next();
//   //   } else {
//   //     // Token is invalid or expired, attempt to refresh
//   //     const dataRef = { role, user_id: userId,token };
//   //     const refreshResult = await RefreshToken(dataRef);

//   //     // If refreshing token fails, redirect to login
//   //     if (!refreshResult?.success) {
//   //       return NextResponse.redirect(new URL('/login', req.url));
//   //     }
      
//   //     // Token refreshed successfully, proceed
//   //     return NextResponse.next();
//   //   }
//   // } else {
//   //   // No valid session cookie, redirect to login
//   //   return NextResponse.redirect(new URL('/login', req.url));
//   // }
// }

export const config = {
  matcher: [
    '/jobs/:path*',
    '/orders',
    '/account/:path*',
    '/weekly_summary',
    '/timesheet',
    '/find-attorney-legal-support',
    '/substitute-attorneys:path*',
    '/substitute-attorneys-job:path*s',
    '/motions:path*',
    '/transcripts:path*',
    '/forum:path*',
    '/experts:path*',
    '/process-servers:path*',
    '/court-reporters:path*',
    '/investigato:path*r',
    '/attorneys:path*',
    '/promos',
    '/paralegal-support',
    '/messages'
  ],
};
