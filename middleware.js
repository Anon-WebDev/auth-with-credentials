export { default } from "next-auth/middleware";

export const config = {
  api: {
    bodyParser: false,
  },
  // Use matcher property with an array for multiple matchers
  // Note: The correct property name is `matchers`, not `matcher`
  matcher: [
    "/dashboard/:path*",
    
  ],
};