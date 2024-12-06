


import { auth as middleware } from "./server/auth";
import { NextResponse } from 'next/server'
const routes = {
     Protection: [/^\/Home\/[^\/]+\/?$/, /^\/administrator(\/[^\/]*)?\/?$/i
],
     auth: [/^\/$/],
     Admin: [/^\/administrator(\/[^\/]*)?\/?$/i],
};
export default middleware((req) => {
     const pathname = req.nextUrl.pathname
     const auth = req.auth;
     const isProtectedRoute = routes.Protection.some((pattern) => pattern.test(pathname));
     const isAuthRoute = routes.auth.some((pattern) => pattern.test(pathname));
     const isAdminRoute = routes.Admin.some((pattern) => pattern.test(pathname));

     console.log({
          isProtectedRoute,
          isAuthRoute,
          isAdminRoute,
          auth,
          pathname
     });

     

     if (isProtectedRoute && !auth) {
          if (pathname !== "/") {
              return NextResponse.redirect(new URL("/", req.url));
          }
      }

     if (isAuthRoute && auth) {
          if (auth.user.role === "STUDENT") {
               return NextResponse.redirect(new URL("/Home/Student", req.url));
           } else if (auth.user.role === "TEACHER") {
               return NextResponse.redirect(new URL("/Home/Teacher", req.url));
          }else if (auth.user.role === "ADMIN") {
               return NextResponse.redirect(new URL("/Administrator", req.url));
          }


     }
     

     if (isAdminRoute && auth && auth.user.role !== "ADMIN") {
          if (pathname !== "/Home/Student") {
              return NextResponse.redirect(new URL("/Home/Student", req.url));
          }
      }


     NextResponse.next()
})


export const config = {
     // The following matcher runs middleware on all routes
     // except static assets.
     // matcher: [
     //      '/((?!.*\\..*|_next).*)', // All routes except static assets
     //      '/api/(.*)', // Include API routes if needed
     //      '/',
     // ],
     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};