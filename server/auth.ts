import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/server/db/prisma"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";



export const { handlers, signIn, signOut, auth } = NextAuth({
     adapter: PrismaAdapter(prisma),

     session: {
          strategy: "jwt"
     },
     providers: [
          Credentials({
               // You can specify which fields should be submitted, by adding keys to the `credentials` object.
               // e.g. domain, username, password, 2FA token, etc.
               credentials: {
                    email: {},
                    password: {},
               },
               authorize: async (credentials) => {
                    try {
                         let user : any  | null = null

                         const { email, password } = credentials as { email: string, password: string }
                         // find the user by UserIdNumber
                         const getUsert = await prisma.user.findFirst({
                              where: {
                                   UserIdNumber: Number(email)
                              },

                         })



                         if (!getUsert) {
                              throw new Error("Invalid credentials.")
                         }


                         // logic to salt and hash password
                         const pwHash = await bcrypt.compare(password, getUsert.passwordHash)

                         // logic to verify if the user exists
                         if (getUsert && pwHash) {
                              user = {
                                   email: getUsert.skyemail,
                                   id: getUsert.id,
                                   image: getUsert.image ? getUsert.image : " " ,
                                   name: getUsert.firstName ? getUsert.firstName : " " ,
                                   role: getUsert.role,
                                   UserIdNumber: Number(getUsert.UserIdNumber)
                              }
                         }



                         if (!user) {
                              throw new Error("Invalid credentials.")
                         }

                         // return JSON object with the user data
                         return user
                    } catch (error) {
                         if (error) {
                              // Return `null` to indicate that the credentials are invalid
                              return null
                         }
                    }
               },
          }),

     ],
     callbacks: {
          jwt({ token, user }) {
               if (user && user.id) { // User is available during sign-in
                    token.id = user.id;
                    token.role = user.role ||"STUDENT", // Add user role to JWT token
                    token.UserIdNumber = user.UserIdNumber; // Add user UserIdNumber to JWT token


               }
               return token
          },

          session({ session, token }) {

               return {
                    ...session
                    , user: {
                         ...session.user,
                         id: token.id,
                         role: token.role||"STUDENT", // Set user role from JWT token
                         UserIdNumber: token.UserIdNumber // Set user UserIdNumber from JWT token

                    }
               }
          },
          signIn(params) {
               return true
          },




     },
})