import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  if (host && !host.includes('localhost') && !host.includes('kashpages.com')) {
    request.headers.set('x-kashpages-custom-host', host);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
