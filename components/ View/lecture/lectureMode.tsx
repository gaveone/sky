"use client"
import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbList,
     BreadcrumbPage,
     BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import React from 'react'

export default function LectureMode() {
     return (
          <>
               <div className=' w-full h-10'>
                    <Breadcrumb>
                         <BreadcrumbList>
                              <BreadcrumbItem>
                                   <BreadcrumbLink href="/Home/Student?n=home">lecture</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator />
                              <BreadcrumbItem>
                                   <BreadcrumbLink href="/components">Class</BreadcrumbLink>
                              </BreadcrumbItem>
                             
                              
                         </BreadcrumbList>
                    </Breadcrumb>


               </div>
               <div className=' flex-1 flex flex-col'>

               </div>

          </>
     )
}




function SubjecteMode() {
     return (
          <>


          </>
     )
}


