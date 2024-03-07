import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired(async function middleware(req) {
  const res = NextResponse.next();
  const session = await getSession(req, res);
  if (!session) {
    return NextResponse.redirect("/api/auth/login");
  }
  const user = session.user;
  res.cookies.set("user", JSON.stringify(user));

  return res;
});

export const config = {
  matcher: ["/dashboard/:path", "/api/cookies"],
};
