"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { LoginS } from "@/lib/zot";
import FindUser from "@/server/endPoint/findUser";
import { signIn } from "next-auth/react"




export default function Login() {
  const { toast } = useToast()
  const loginM = useMutation({
    mutationFn: async ( {email ,password}:{email: string,  password: string})=>{
      signIn("credentials", { email: email, password: password , redirect:true ,redirectTo:"/Home/Student" })

    },
    onSuccess: () => {

      toast({
        title: "success",
        description: "Logged in successfully",
        variant: "default"
      })
    },
    onError: (error) => {
      toast({
        title: "error",
        description: error.message,
        variant: "destructive"
      })
    }
  })




  const [Continue, setContinue] = useState(false);
  const [ShowPassword, setShowPassword] = useState(true);

  const [client, setClient] = useState({
    StudentNumber: "",
    password: "",
  })
  const FindUserM = useMutation({
    mutationFn: FindUser,
    onSuccess: (data) => {
      if (data.error){
        toast({
          title: "error",
          description: "Student number not found please try again",
          variant: "default"
        })
        setContinue(false)
        
      }
      if (data.success){
        setContinue(true)
        
        toast({
          title: "success",
          description: "Student Number found, please enter your password",
          variant: "default"
        })
      }

      
     
    },
    onError: (error) => {
      toast({
        title: "error",
        description: error.message,
        variant: "destructive"
      })
      setContinue(false)
    }
    
  })
  const HandleActions = () => {
   if (Continue){
     return loginM.isPending
   }else{
    return FindUserM.isPending
   }
  }

  function Proceed() {
    try {
      FindUserM.mutate({ UserIdNumber: Number(client.StudentNumber) })
    

    } catch (error) {
      console.error("Unhandled error occurred:", error);
      toast({
        title: "error",
        description: "Invalid Student Number",
        variant: "destructive"
      })
      setContinue(false)

    }



  }

  function LoginFun() {
    const isValid = LoginS.safeParse(client)
    if (!isValid.success) {
      isValid.error.errors.forEach(error => {
        toast({
          title: error.path.join(" -> "),
          variant: "destructive",
          description: error.message
        })
      })
      return
    }
    loginM.mutate({ email: isValid.data.StudentNumber, password: isValid.data.password })


  }


  return (
    <>

      {loginM.isPending ? (<>
        <LoaderCircle size={50} className=' animate-spin' />


      </>) : (<>
        <div className="">
          <label htmlFor="StudentNumber"  >
            <h2>Student number</h2>
            <Input
              type="text"
              className=" w-[300px]"
              id="StudentNumber"
              name="StudentNumber"
              placeholder="Student Number"
              value={client.StudentNumber}
              disabled={HandleActions()}
              onChange={(e) => {
                setClient((pre) => ({ ...pre, StudentNumber: e.target.value }))

              }}
            />
          </label>
        </div>



        {Continue && (<>
          <div className=" flex flex-row gap-1 justify-center items-center ">
            <label htmlFor="password">
              <h2> password</h2>
              <Input
                type={`${ShowPassword ? "password" : "text"}`}
                className="w-[250px]"
                id="password"
                name="password"
                placeholder="password"
                value={client.password}
                disabled={HandleActions()}
                onChange={(e) => {
                  setClient((pre) => ({ ...pre, password: e.target.value }))
                }}
              />
            </label>
            <div className=" h-full flex items-end">
              <Button onClick={() => setShowPassword((pre) => !pre)} >
                {ShowPassword ? (<FaRegEyeSlash />) : (<FaEye />)}
              </Button>
            </div>

          </div>


        </>)}

        {Continue ? 
        (<Button onClick={LoginFun}>{ HandleActions()? <LoaderCircle className=' animate-spin' /> :"login"}</Button>) 
        : 
        (<Button onClick={Proceed}>{ HandleActions()? <LoaderCircle className=' animate-spin' /> :"continue"}</Button>)}



      </>)}







    </>
  );
}
