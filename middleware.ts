import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
export const config = {
  //*: zero or more -> /users, /users/1,  //+: one or more,//?: zero or one
  matcher: ["/dashboard/:path*"],
};

// import middleware from "next-auth/middleware";
// export default middleware;

// import and export at one go like below
// export {default} from 'next-auth/middleware';

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }
