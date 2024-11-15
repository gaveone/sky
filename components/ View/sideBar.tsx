"use client";
import React, {  useState } from "react";
import { Button } from "../ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

export default function SideBar() {
     const [clap, setClap] = useState(false);


     return (
          <div
               className={`
          SIDEBAR sticky top-0  grid grid-rows-[75px_1fr_75px] gap-1 p-1  border-r-[1px] border-r-slate-400
          transition-all duration-200 ease-in-out
           ${clap ? "w-[85px]" : "w-[250px]"}
          `}
          >
               <Button
                    onClick={() => {
                         setClap((pre) => !pre);
                    }}
                    variant={"outline"}
                    className={`
                         absolute top-1 transition-all duration-200 ease-in-out 
                         ${clap ? "left-[75%]" : "left-[95%]"
                         }`}
               >
                    {clap
                         ? <IoIosArrowForward size={30} color="slate-400" />
                         : <IoIosArrowBack size={30} color="slate-400" />}
               </Button>

               <header className=" border rounded-sm">
               </header>
               <main className=" flex flex-col gap-1 items-center">
                    {/* Main content */}
                    <SideBarGroup />
                    <SideBarGroup />
                    <SideBarGroup />
                    <SideBarGroup />
               </main>

               <footer
                    className={`
                         border rounded-sm grid transition-all duration-200
                         ${clap && " justify-center"} 
                         p-1
                         `}
               >
                    <DropdownMenu>
                         <DropdownMenuTrigger>
                              <div className="flex items-center gap-2 w-full">
                                   {clap
                                        ? (
                                             <Avatar className="w-[3rem] h-[3rem] ">
                                                  <AvatarImage src="https://github.com/shadcn.png" />
                                                  <AvatarFallback>
                                                       CN
                                                  </AvatarFallback>
                                             </Avatar>
                                        )
                                        : (
                                             <>
                                                  <Avatar className="w-[3rem] h-[3rem]">
                                                       <AvatarImage src="https://github.com/shadcn.png" />
                                                       <AvatarFallback>
                                                            CN
                                                       </AvatarFallback>
                                                  </Avatar>
                                                  <h1 className=" text-lg">
                                                       30094590
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
               </footer>
          </div>
     );
}

function SideBarGroup() {
     const [open, setOpen] = useState(true);

     return (
          <div className=" w-full">
               <div
                    onClick={() => setOpen((pre) => !pre)}
                    className=" flex flex-row gap-[0.1rem] items-center"
               >
                    <h1 className=" text-[1.3rem]">Group</h1>
                    <ChevronRight
                         className={`transition-all duration-300  ease-in-out ${open ? "rotate-0" : "rotate-90"
                              } `}
                    />
               </div>
               <div
                    className={`transition-all duration-300  ease-in-out overflow-hidden   flex flex-col gap-1 ${open ? " scale-y-100" : "scale-y-0 h-0"
                         } origin-top `}
               >
                    <Button variant={"secondary"} className=" text-lg">
                         math
                    </Button>
                    <Button variant={"secondary"} className=" text-lg">
                         math
                    </Button>
                    <Button variant={"secondary"} className=" text-lg">
                         math
                    </Button>
               </div>
          </div>
     );
}
