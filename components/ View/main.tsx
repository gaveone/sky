"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Main() {
  

  return (
    <main className=' h-full w-full flex flex-col'>
      {/* Main content */}
      <nav className=' pl-7 w-full h-14 flex flex-col justify-center border-b'>

        H

      </nav>
      <section className=' flex-grow p-2'>
        <Tabs defaultValue="lecture" className="">
          <TabsList>
            <TabsTrigger value="lecture">lecture</TabsTrigger>
            <TabsTrigger value="Quiz">Quiz</TabsTrigger>
            <TabsTrigger value="Graidding">Graidding</TabsTrigger>
          </TabsList>
          <TabsContent className=' w-full h-full' value="lecture">lecture.</TabsContent>
          <TabsContent className=' w-full h-full' value="Quiz">Quiz.</TabsContent>
          <TabsContent className=' w-full h-full' value="Graidding">Graidding.</TabsContent>

        </Tabs>





      </section>


    </main>
  )
}
