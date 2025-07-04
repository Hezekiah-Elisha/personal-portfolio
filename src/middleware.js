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
  console.log("Request path:", path);

  if (isProtectedRoute) {
    const accessToken = request.cookies.get("token")?.value;
    console.log("Access token:", accessToken);

    if (!accessToken) {
      console.log("No access token found, redirecting to sign in page.");
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
