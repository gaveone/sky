"use server";
import { signOut } from "@/server/auth";



export default async function SignOut() {
     try {
          await signOut({redirect:true, redirectTo: "/" })
     } catch (error) {
          console.log(error);
          
     }
}