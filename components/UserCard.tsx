"use client"
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./toggleMode";

import React from 'react'
import { Button } from "./ui/button";
import { useSession , signOut } from "next-auth/react"

type props = {
     clap: boolean
     userNumber: number | null;
     username: string | null
}

function UserCard({ clap }: props) {
     const { data: session } = useSession()
     console.log(session?.user.UserIdNumber);
     
    
   
     return (
          <div
               className={`
                grid grid-cols-[1fr_1fr] justify-center items-center w-[260px] gap-5
              
               `}

          >
               <DropdownMenu>
                    <DropdownMenuTrigger>
                         <div className="flex items-center gap-2 ">
                              {clap
                                   ? (
                                        <Avatar className="w-[3rem] h-[3rem] ">
                                             <AvatarImage src="https://github.com/shadcn.png" />
                                             <AvatarFallback>
                                                  {session?.user.name?.substring(0, 1)}
                                             </AvatarFallback>
                                        </Avatar>
                                   )
                                   : (
                                        <>
                                             <Avatar className="w-[3rem] h-[3rem]">
                                                  <AvatarImage src="https://github.com/shadcn.png" />
                                                  <AvatarFallback>
                                                       {session?.user.name?.substring(0, 1)}
                                                  </AvatarFallback>
                                             </Avatar>
                                             <h1 className=" text-lg">
                                                  {session?.user.UserIdNumber}
                                             </h1>
                                        </>
                                   )}
                         </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                         <DropdownMenuLabel>My Account</DropdownMenuLabel>
                         <DropdownMenuSeparator />
                         <DropdownMenuItem>Profile</DropdownMenuItem>
                         <DropdownMenuItem>Billing</DropdownMenuItem>
                         <DropdownMenuItem>Team</DropdownMenuItem>
                         <DropdownMenuItem className=" flex justify-center items-center">
                             
                                   <Button onClick={() => signOut({redirect:true , redirectTo:"/"})} variant={"destructive"}>Logout</Button>
                           

                         </DropdownMenuItem>
                    </DropdownMenuContent>
               </DropdownMenu>
               <ModeToggle />





          </div>
     )
}

export default UserCard
