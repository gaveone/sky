"use client"
import React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { useRouter } from 'next/navigation'
interface TransitionButtonX extends ButtonProps {
     children: React.ReactNode;
     herf: string,
     Voidfunction:()=>boolean | undefined;
     delay: number;

}

function sleep(ms: number): Promise<void> {
     return new Promise(resolve => setTimeout(resolve, ms))
}
export default function ButtonX({
     children,
     herf,
     Voidfunction,
     delay,
     ...props


}: TransitionButtonX) {
     const router = useRouter();
     const handleClick = async () => {
          const body = document.querySelector('body');
          // If they're still other actions needed to be done before we would've moved to the next page
          const Allow = Voidfunction()
          if (!Allow) return;
          // If there's still other actions delay, the transition
          await sleep((550 +delay));
          body?.classList.add('page-transition');
          
          // Push to the new location
          router.push(herf)
          // Wait for sometime then remove the transition
          await sleep(550);
          body?.classList.remove('page-transition');


     }

     return (
          <Button
               onClick={(e) => {
                    e.preventDefault();
                    handleClick();
               }}
               {...props}>
               {children}

          </Button>
     )
}
