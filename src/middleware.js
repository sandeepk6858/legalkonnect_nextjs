import { NextResponse } from 'next/server';
import { getSessionCookie } from '@/components/utils/cookies';
import VerifyToken from '@/actions/verifyToken';
import RefreshToken from '@/actions/refreshToken';

export async function middleware(req) {
  // Retrieve cookies from the request
  const cookies = getSessionCookie();
  const token = cookies.token;
  const userId = cookies.userId;
  const role = cookies.role;
  const sessionCookieAuth = cookies.sessionCookieAuth;

  // If sessionCookieAuth is true, validate token
  if (sessionCookieAuth) {
    const result = await VerifyToken(token);
    if (result?.success) {
      return NextResponse.next();
    } else {
      // Token is invalid or expired, attempt to refresh
      const dataRef = { role, user_id: userId };
      const refreshResult = await RefreshToken(dataRef);

      // If refreshing token fails, redirect to login
      if (!refreshResult?.success) {
        return NextResponse.redirect(new URL('/login', req.url));
      }
      
      // Token refreshed successfully, proceed
      return NextResponse.next();
    }
  } else {
    // No valid session cookie, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

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
