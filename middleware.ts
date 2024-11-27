


import { auth as middleware } from "./server/auth";
import { NextResponse } from 'next/server'
const routes = {
     Protection: [
          /^\/Home\/[^\/]+\/?$/, // Matches '/home/[dynamic]'
          /^\/Admin\/[^\/]+\/?$/, // Matches '/Admin/[dynamic]'
     ],
     auth: [
          /^\/$/, // Matches '/'
     ],
};
export default middleware((req)=>{
      const pathname = req.nextUrl.pathname
      const auth =req.auth;
     const isProtectedRoute = routes.Protection.some((pattern) => pattern.test(pathname));
     const isAuthRoute = routes.auth.some((pattern) => pattern.test(pathname));

     // if (isProtectedRoute && !auth){
     //      return NextResponse.redirect(new URL("/", req.url));
     // }

     // if (isAuthRoute && auth){
     //      return NextResponse.redirect(new URL("/Home/Student", req.url));
     // }
    
    
     NextResponse.next()
})


export const config = {
     // The following matcher runs middleware on all routes
     // except static assets.
     matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
   };