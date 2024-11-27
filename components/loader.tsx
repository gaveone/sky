import React from 'react'
import { LoaderCircle } from 'lucide-react';

export default function Loader() {
  return (
    <div className=' flex flex-col justify-center items-center h-full w-full'>
        <LoaderCircle className=' animate-spin' size={40} />
      
    </div>
  )
}
