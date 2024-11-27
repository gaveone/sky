import { Button } from '@/components/ui/button';
import React from 'react'
import {
     Card,
     // CardContent,
     // CardDescription,
     // CardFooter,
     // CardHeader,
     // CardTitle,
} from "@/components/ui/card"

type op = {
     Season: string;
     TotalStudents: number;
     PaidStudents: number;
     DroppedOut: number;
     PaidPercentage: () => string;
}
export default function SemesterCard({ op, IsSemester }: { op: op, IsSemester: boolean }) {
     return (
          <Card className=' flex flex-col gap-2 p-[5px_15px] w-[300px]'>

               <h1 className=' text-lg font-extrabold'>{op.Season}</h1>
               <div>
                    <h2 className=' font-bold'> Total student registered</h2>
                    <h3 className=' ml-4 text-green-600'>{op.TotalStudents}</h3>
               </div>



               <div>

                    <h2 className=' font-bold'> Paid Student %</h2>
                    <h3 className=' ml-4 text-green-600'>{op.PaidPercentage()}</h3>

               </div>


               <div className='p-1 flex justify-center '>
                    {IsSemester ? (
                         <Button variant={"link"} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Send Notice</Button>
                    ) : (
                         <Button variant={"link"} className="text-gray-400 cursor-not-allowed" disabled>
                              Notice cannot be sent to archived semester
                         </Button>
                    )}

               </div>




          </Card>
     )
}
