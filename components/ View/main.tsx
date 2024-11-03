"use client"
import { usePersonStore } from '@/store/user'
import React from 'react'
import { Button } from '../ui/button'

export default function Main() {
     const decrement = usePersonStore((state)=>state.decrement)
     const increment = usePersonStore((state)=>state.increment)
     const item = usePersonStore((state)=>state.count)
    
  return (
    <main className=' h-full w-full flex flex-col'>
      {/* Main content */}
      <nav className=' pl-7 w-full h-14 flex flex-col justify-center border-b'>

        H

      </nav>
      <section className=' flex-grow'>



      </section>

      
    </main>
  )
}
