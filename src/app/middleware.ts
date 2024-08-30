// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/dashboard' && !request.cookies.get('auth-token')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}