import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/",
  "/transactions",
  "/budgets",
  "/pots",
  "/recurring-bills",
];
const publicRoutes = ["/login", "/signup"];

export default function middleware(req: NextRequest) {
  // Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
