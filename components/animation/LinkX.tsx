"use client"

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
interface TransitionLinkX extends LinkProps {
     children: React.ReactNode;
     delay: number;
     herf: string;
     

}

function sleep(ms: number): Promise<void> {
     return new Promise(resolve => setTimeout(resolve, ms))
}
export default function LinkX({ children , delay ,herf  ,...props }: TransitionLinkX) {
     const router = useRouter();
     const handleClick = async () => {
          const body = document.querySelector('body');
          // If there's still other actions delay, the transition
          await sleep((550 + delay));
          body?.classList.add('page-transition');

          // Push to the new location
          router.push(herf)
          // Wait for sometime then remove the transition
          await sleep(550);
          body?.classList.remove('page-transition');


     }
     return (
          <Link
               onClick={(e) => {
                    e.preventDefault();
                    handleClick();
               }}
               {...props}
               href={herf}
          >
               {children}

          </Link>
     )
}
