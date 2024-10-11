import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  // Allow login and register routes to pass through
  if (request.nextUrl.pathname === '/api/auth/login' || request.nextUrl.pathname === '/api/auth/register') {
    console.log('middleware triggered');
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    console.log('middleware triggered, no token');
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Check token expiration (you'll need to implement this logic)
  if (isTokenExpired(token)) {
    console.log('middleware triggered, token expired');
    // Refresh token logic here
    // If refresh fails, redirect to login
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};

function isTokenExpired(token: string): boolean {
  // Implement token expiration check logic here
  // You might need to decode the token and check its expiration claim
  return false; // Placeholder
}