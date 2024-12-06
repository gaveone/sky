"use server";
import { signIn } from "@/server/auth";



export default async function SignIn({ email, password }: { password: string, email: string }) {
     try {
           await signIn("credentials", { email: email, password: password , redirect:true ,redirectTo:"/Home/Student" })
           return { message: "Sign in successful", success: true, error: false, type: null };
     } catch (error) {
          console.error("Error signing in:", error);
          return { message: "An error occurred while signing in", success: false, error: true, type: null };
          
     }
}