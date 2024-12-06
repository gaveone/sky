"use server";

import { studentSchema, teacherRegistrationSchema } from "@/lib/zot";
import prisma from "@/server/db/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { Role } from '@prisma/client'; // Import the enum if defined in the Prisma client


async function GenerateData(lastName: string,) {
     const newUserIdNumber = Date.now() + Math.floor(Math.random() * 9999999999);

     const plainTextPassword = `${lastName}.${newUserIdNumber}`;
     const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
     const skyemail = `${lastName}@sky.com`;

     return {
          passwordHash: hashedPassword,
          skyemail: skyemail,
          UserIdNumber: newUserIdNumber,
     }

}
export default async function SignUp(
     { type, data }: {
          type: "STUDENT" | "ADMIN" | "TEACHER";
          data: [string, string | number][];
     },
) {
     console.dir(typeof data);
     if (!data || !Array.isArray(data)) {
          console.error("SignUp received invalid data:", data);
          return { message: "Invalid input: data should be an array of key-value pairs", success: false, error: true, type: null };
     }

     try {
          console.log("Raw data before parsing:", data);
          const parsedData = Object.fromEntries(data);

          if (type === "STUDENT") {
               console.log("Processing student sign-up...");
               // Handle STUDENT logic here

               const isValid = studentSchema.safeParse(parsedData);
               if (!isValid.success) {
                    console.error("Validation failed for student data:", isValid.error.errors);
                    return { message: "Validation error: Invalid student data provided", success: false, error: true, type: null };
               }

               

               const studentSchemaD = {
                    ...isValid.data,
                    ...(await GenerateData(isValid.data.lastName)),
               }

               console.log("Final data sent to Prisma:", studentSchemaD);
               console.log("Generated Data:", await GenerateData(isValid.data.lastName));

               try {
                    const newUser = await prisma.user.create({
                         data: {
                              ...studentSchemaD,
                              role: Role.STUDENT,
                         },
                    });

                    console.log("New user created:", newUser);

                    return {
                         message: "User created successfully",
                         success: true,
                         error: false,
                         type: "ADMIN",
                    };
                    
               } catch (error) {
                    console.error("Database error while creating new user:", error);
                    return {
                         message: "Database error: Failed to create new user",
                         success: false,
                         error: true,
                         type: null,
                    };
                    
               }

          }

          if (type === "ADMIN" || type === "TEACHER") {
               console.log("Processing admin sign-up...");

               // Convert array of tuples to an object


               console.log("Parsed data:", parsedData);

               // Validate using Zod schema
               const isValid = teacherRegistrationSchema.safeParse(parsedData);
               if (!isValid.success) {
                    console.error("Validation failed for admin data:", isValid.error.errors);
                    return { message: "Validation error: Invalid admin data provided", success: false, error: true, type: null };
               }

               console.log("Validated data:", isValid.data);

               const generatedData = await GenerateData(isValid.data.lastName)
               if (!generatedData || !generatedData.passwordHash || !generatedData.skyemail || !generatedData.UserIdNumber) {
                    console.error("Failed to generate required fields:", generatedData);
                    return {
                        message: "Internal error: Missing required fields",
                        success: false,
                        error: true,
                        type: null,
                    };
                }

               const newUserSchema = {
                    ...isValid.data,
                    ...generatedData
               };

               console.log("Prepared new user schema:", newUserSchema);

               try {
                    const newUser = await prisma.user.create({
                         data: {
                              ...newUserSchema,
                              role: type  ==="ADMIN" ? Role.ADMIN : Role.TEACHER,
                         },
                    });

                    console.log("New user created:", newUser);

                    return {
                         message: "User created successfully",
                         success: true,
                         error: false,
                         type: "ADMIN",
                    };
               } catch (dbError) {
                    console.error("Database error while creating new user:", dbError);
                    return {
                         message: "Database error: Failed to create new user",
                         success: false,
                         error: true,
                         type: null,
                    };
               }
          }

          

          console.warn("Unknown type provided:", type);
          return {
               message: `Invalid user type: ${type}`,
               success: false,
               error: true,
               type: null,
          };
     } catch (error: any) {
          console.error("Unhandled error occurred:", error);
          return {
               message: `Unexpected error: ${error.message || "Unknown error"}`,
               success: false,
               error: true,
               type: null,
          };
     }
}
