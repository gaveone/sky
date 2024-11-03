"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function SideBar() {
     const [clap, setClap] = useState(false)
     useEffect(() => {
          AnimationButton()
     }, [clap])

     async function AnimationButton() {

          const SideB = document.querySelector(".SIDEBAR")
          const SideBU = document.querySelector(".Defaultcyber")
          if (clap) {
               SideB?.classList.add('SIDEBARClap')
               SideBU?.classList.add("Move")

          } else {
               SideB?.classList.remove('SIDEBARClap')
               SideBU?.classList.remove("Move")

          }



     }

     return (
          <div className='SIDEBAR sticky top-0  grid grid-rows-[75px_1fr_75px] gap-1 p-1  border-r-[1px] border-r-slate-400'>
               <Button onClick={() => {
                    setClap((pre) => !pre)
               }} variant={"outline"} className={` Defaultcyber absolute top-1  w-1`}>
                    {clap ? (< IoIosArrowForward size={30} color='slate-400' />) : (<IoIosArrowBack size={30} color='slate-400' />)}

               </Button>

               <header className=' border rounded-sm' >

               </header>
               <main>

               </main>

               <footer className={`border rounded-sm grid ${clap && " justify-center"}    p-1`}>
                    <DropdownMenu>
                         <DropdownMenuTrigger>
                              <div className='flex flex-row gap-2 w-full flex-1 items-center   '>
                                   {clap ?
                                        (
                                             <Avatar className='w-[3rem] h-[3rem] '>
                                                  <AvatarImage src="https://github.com/shadcn.png" />
                                                  <AvatarFallback>CN</AvatarFallback>
                                             </Avatar>


                                        ) :
                                        (
                                             <>
                                             <Avatar className='w-[3rem] h-[3rem]'>
                                                  <AvatarImage src="https://github.com/shadcn.png" />
                                                  <AvatarFallback>CN</AvatarFallback>
                                             </Avatar>
                                             <h1 className=' text-lg'>name</h1>
                                             </>
                                             

                                        )
                                   }

                              </div>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent>
                              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Profile</DropdownMenuItem>
                              <DropdownMenuItem>Billing</DropdownMenuItem>
                              <DropdownMenuItem>Team</DropdownMenuItem>
                              <DropdownMenuItem>Subscription</DropdownMenuItem>
                         </DropdownMenuContent>
                    </DropdownMenu>




               </footer>

          </div>
     )
}
