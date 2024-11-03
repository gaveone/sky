"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import ButtonX from "../animation/ButtonX";



export default function Login() {
  const [Continue, setContinue] = useState(false);
  const [ShowPassword, setShowPassword] = useState(true);
  const [client, setClient] = useState({
    StudentNumber: "",
    password: "",
  })

  function Proceed() {
    if (client.StudentNumber.length < 1) {
      alert("Please enter your Student Number")
      setContinue(false)
    } else {

      setContinue(true)
    }

  }

  function LoginFun() {
    let pass  = false;
    Proceed()
    if (client.StudentNumber.length > 1) {
      if (client.password.length > 5){
        // Continue validation for login
        pass = true;
       
      }

    }else{
      pass = false;

    }
    return pass
  }


  return (
    <>
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
              onChange={(e) => {
                setClient((pre) => ({ ...pre, password: e.target.value }))
              }}
            />
          </label>
          <div className=" h-full flex items-end">
            <Button onClick={()=>setShowPassword((pre)=>!pre)} >
              {ShowPassword ? (<FaRegEyeSlash />) : (<FaEye />)}
            </Button>
          </div>

        </div>


      </>)}

      <ButtonX  delay={100} herf="/Home/Student" Voidfunction={LoginFun} >
        {Continue ? "login" : "continue"}
      </ButtonX>


    </>
  );
}
