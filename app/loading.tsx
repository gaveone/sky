import { LoaderCircle } from 'lucide-react';

export default function Loading() {
     // You can add any UI inside Loading, including a Skeleton.
     return <div className=" h-screen flex  justify-center items-center flex-col bg-background text-foreground">
              <LoaderCircle size={55} className=' animate-spin' />
              <h1 className=' text-3xl'> loading...</h1>



     </div>
   }