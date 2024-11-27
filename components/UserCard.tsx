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
type props = {
     clap: boolean
     userNumber: number;
     username: string
}

function UserCard({clap , userNumber , username}:props) {
     return (
          <div
          className={`
                grid grid-cols-[1fr_1fr] justify-center items-center w-[220px] gap-5
              
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
                                                  {username.substring(0 ,1)}
                                             </AvatarFallback>
                                        </Avatar>
                                   )
                                   : (
                                        <>
                                             <Avatar className="w-[3rem] h-[3rem]">
                                                  <AvatarImage src="https://github.com/shadcn.png" />
                                                  <AvatarFallback>
                                                  {username.substring(0 ,1)}
                                                  </AvatarFallback>
                                             </Avatar>
                                             <h1 className=" text-lg">
                                                  {userNumber}
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
                         <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
               </DropdownMenu>
               <ModeToggle />





          </div>
     )
}

export default UserCard
