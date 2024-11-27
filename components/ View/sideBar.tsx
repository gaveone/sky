"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
import { ModeToggle } from "../toggleMode";
import UserCard from "../UserCard";
type Item={
     ItemName: string;
     subItem: string[];
}


export default function SideBar({Item}:{Item:Item[] |null}) {
     const [clap] = useState(false);

     return (
          <div
               className={`
          SIDEBAR sticky top-0  grid grid-rows-[75px_1fr_75px] gap-1 p-1  border-r-[1px] border-r-slate-400
          transition-all duration-200 ease-in-out
           ${clap ? "w-[85px]" : "w-[250px]"}
          `}
          >
               {/* <Button
                    onClick={() => {
                         setClap((pre) => !pre);
                    }}
                    variant={"outline"}
                    className={`
                         absolute w-4 top-1 transition-all duration-200 ease-in-out 
                         ${clap ? "left-[75%]" : "left-[92%]"}`}
               >
                    {clap
                         ? <IoIosArrowForward size={30} color="slate-400" />
                         : <IoIosArrowBack size={30} color="slate-400" />}
               </Button> */}

               <header className=" border rounded-sm">
               </header>
               <main className=" relative flex flex-col gap-2 items-center w-full">
                    {/* Main content */}
                    {Item?.map((Item) => (
                         <SideBarGroup
                              key={Item.ItemName}
                              clap={clap}
                              className={Item.ItemName}
                              SubjectList={Item.subItem}
                         />
                    ))}


               </main>

               <footer
                    className={`
                         border rounded-sm flex flex-row transition-all duration-200 justify-center items-center 
                         ${clap && " justify-center"} 
                         p-1
                         `}
               >
                   <UserCard clap={clap} username="adeun" userNumber={4543345345}/>
               </footer>
          </div>
     );
}

function SideBarGroup(
     { clap, className, SubjectList }: {
          clap: boolean;
          className: string;
          SubjectList: string[];
     },
) {
     const [open, setOpen] = useState(true);

     return (
          <div className=" w-[99%] ">
               <div
                    onClick={() => setOpen((pre) => !pre)}
                    className=" flex flex-row gap-[0.1rem] items-center"
               >
                    <h1 className=" text-[1.3rem]">{className}</h1>
                    <ChevronRight
                         className={`transition-all duration-300  ease-in-out ${open ? "rotate-0" : "rotate-90"
                              } `}
                    />
               </div>
               <div
                    className={` w-full transition-all duration-300  ease-in-out   flex flex-col gap-3 ${open ? " scale-y-100" : "scale-y-0 h-0"
                         } origin-top `}
               >
                   
                    {SubjectList.map((Subject) => {
                         return (
                              <>
                                   <Button
                                        variant={"secondary"}
                                        className={`text-lg ${clap && "w-[90%]"
                                             }  text-left`}
                                   >
                                        {Subject}
                                   </Button>
                              </>
                         );
                    })}
               </div>
          </div>
     );
}
