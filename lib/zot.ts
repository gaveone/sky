import { z } from "zod";

export const teacherRegistrationSchema = z.object({
     firstName: z.string().min(1, "First Name is required").max(
          50,
          "First Name must be 50 characters or less",
     ),
     lastName: z.string().min(1, "Last Name is required").max(
          50,
          "Last Name must be 50 characters or less",
     ),
     email: z.string().email("Invalid email format"),
     phoneNumber: z
          .string()
          .regex(
               /^[0-9]{10,15}$/,
               "Phone Number must be between 10 and 15 digits",
          ),
     address: z.string().min(1, "Address is required"),
     dateOfBirth: z
          .string()
          .refine(
               (date) => !isNaN(new Date(date).getTime()),
               "Invalid date format",
          ),
     certification: z.string().optional(), // Certification can be optional
     yearsOfExperience: z
          .number()
          .int("Years of Experience must be an integer")
          .min(0, "Years of Experience cannot be negative"),
});


export const studentSchema = z.object({
     firstName: z.string().min(1, "First Name is required").max(50, "First Name must be 50 characters or less"),
     lastName: z.string().min(1, "Last Name is required").max(50, "Last Name must be 50 characters or less"),
     email: z.string().email("Invalid email format"),
     phoneNumber: z.string().regex(/^[0-9]{10,15}$/, "Phone Number must be between 10 and 15 digits"),
     address: z.string().min(1, "Address is required"),
     dateOfBirth: z.string().refine((date) => !isNaN(new Date(date).getTime()), "Invalid date format"),
     course: z.string().min(1, "Course is required"),
     year: z.string().min(1, "Year is required"),
     guardianName: z.string().optional(),
     guardianContact: z.string().regex(/^[0-9]{10,15}$/, "Guardian Contact must be between 10 and 15 digits").optional(),
     emergencyContact: z.string().regex(/^[0-9]{10,15}$/, "Emergency Contact must be between 10 and 15 digits").optional(),
 });