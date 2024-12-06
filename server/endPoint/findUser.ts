"use server";

import prisma from "../db/prisma";

export default async function FindUser({UserIdNumber}:{UserIdNumber:number}) {
     try {
          const user = await prisma.user.findFirst({
               where: {
                    UserIdNumber: UserIdNumber,
               },
          });

          if (!user) {
               return { message: "User not found", success: false, error: true };
          }

          console.log("User found:");
          return { message:"user found" ,success: true, error: false };

          
         
          
     } catch (error) {
          console.error("Error fetching user:", error);
          return { message: "Error fetching user", success: false, error: true };
          
     }
     
}