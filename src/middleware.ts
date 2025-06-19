import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Check if the request is from horoscope.pklabs.in
  if (hostname.includes("horoscope.pklabs.in")) {
    // Don't rewrite if already on horoscope path to avoid loops
    if (!url.pathname.startsWith("/horoscope")) {
      url.pathname = "/horoscope" + url.pathname;
      return NextResponse.rewrite(url);
    }
  }

  // For all other requests, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
