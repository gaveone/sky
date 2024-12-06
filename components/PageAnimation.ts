"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

function sleep(ms: number): Promise<void> {
     return new Promise(resolve => setTimeout(resolve, ms))
}
export function usePageTransition() {
     const router = useRouter();

     useEffect(() => {
          const handleRouteChangeStart = async () => {
               const body = document.querySelector("body");
               if (body) {
                    body.classList.add("page-transition");
                    await sleep(550); // Wait for animation
                    body.classList.remove("page-transition");
               }
          };

          // Attach event listener for route changes
          router.events?.on("routeChangeStart", handleRouteChangeStart);

          // Cleanup on unmount
          return () => {
               router.events?.off("routeChangeStart", handleRouteChangeStart);
          };
     }, [router]);
}