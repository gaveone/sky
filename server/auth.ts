import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/server/db/prisma"


export const { handlers, signIn, signOut, auth } = NextAuth({
     adapter: PrismaAdapter(prisma),     
     session: {
          strategy: "jwt"
     },
     providers: [],
     callbacks: {
          jwt({ token, user }) {
               if (user && user.id) { // User is available during sign-in
                    token.id = user.id
                   
               }
               return token
          },

          session({ session, token }) {

               return {
                    ...session
                    , user: {
                         ...session.user,
                         id: token.id,
                        
                    }
               }
          },
          signIn(params) {
               return true
          },




     },
})