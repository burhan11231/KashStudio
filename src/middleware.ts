import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-kashstudio-middleware", "active");
  return response;
}

export const config = {
  matcher: ["/client/:path*", "/developer/:path*", "/admin/:path*"]
};
