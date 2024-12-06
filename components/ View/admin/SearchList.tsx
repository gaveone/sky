
"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function SearchList() {
     return (
          <>
               <div className='flex flex-row gap-5 h-10 pl-1 pr-1 justify-center items-center'>
                    {/* Search node component */}
                    <Input className=' w-[340px]' placeholder='student name or number' />
                    <div className=' flex flex-row gap-6 '>
                         <Label htmlFor='Student' className=' text-[20px] flex flex-row gap-1 items-center '>
                              <Checkbox id='Student' />
                              <h3>Student</h3>

                         </Label>

                         <Label htmlFor='Teacher' className=' text-[20px] flex flex-row gap-1 items-center '>
                              <Checkbox id='Teacher' />
                              <h3>Teacher</h3>

                         </Label>


                         
                    </div>
                    <Button> search</Button>



               </div>

          </>
     )
}
