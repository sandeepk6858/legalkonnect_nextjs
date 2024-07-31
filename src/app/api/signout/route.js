import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/login', process.env.NEXTAUTH_URL));
  response.cookies.set('next-auth-session', '', { httpOnly: true, maxAge: -1 });
  return response;
}