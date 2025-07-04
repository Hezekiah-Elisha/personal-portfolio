import { NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/experiences",
  "/dashboard/skills",
  "/dashboard/projects",
  "/dashboard/education",
  "/dashboard/aboutme",
  "/dashboard/contact",
];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute) {
    const accessToken = request.cookies.get("token")?.value;

    if (!accessToken) {
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
    return NextResponse.next();
  }
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// export const config = {
//   matcher: ['/dashboard/:path*', '/dashboard/:path*'],
// }
