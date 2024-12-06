"use client";

import { Button } from "@/components/ui/button";
import UserCard from "@/components/UserCard";
import React, { useState } from "react";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Loader from "@/components/loader";
import { useMutation } from "@tanstack/react-query";
import SignUp from "@/server/endPoint/SignUp";
import { useToast } from "@/hooks/use-toast";
import { studentSchema, teacherRegistrationSchema } from "@/lib/zot";
import axios from 'axios'
type gp ={
     type: "STUDENT" | "ADMIN" | "TEACHER";
     data: [string, string | number][];

}

export default function Aheader() {
     const { toast } = useToast()

     const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          dateOfBirth: '',
          certification: '',
          yearsOfExperience: ''
     });
     const [ProcessTeacherRequest, setProcessTeacherRequest] = useState(false)

     const [formDataStudent, setFormDataStudent] = useState({
          firstName: '',          // First Name of the student
          lastName: '',           // Last Name of the student
          email: '',              // Email Address of the student
          phoneNumber: '',        // Phone Number of the student
          address: '',            // Full Address of the student
          dateOfBirth: '',        // Date of Birth
          course: '',             // Course the student is enrolled in
          year: '',               // Academic Year
          guardianName: '',       // Name of the guardian/parent
          guardianContact: '',    // Guardian/Parent's contact number
          emergencyContact: '',   // Emergency Contact number

     });
     const [ProcessStudentRequest, setProcessStudentRequest] = useState(false)
     const SignUpMutation = useMutation({
          mutationFn: async (data:gp)=>{
               const U = await axios.post("/api/signUp", data)
               return U.data;

          },
          onSuccess: (data) => {
               // toast({
               //      description: data?.message
               // })

          }
     })



     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { id, value } = e.target;
          setFormData((prevFormData) => ({
               ...prevFormData,
               [id]: id === "yearsOfExperience" ? Number(value) : value
          }));
     };

     function SubmitTeacherRegistration() {
          console.log("Form data before validation:", formData);

          const formDataV = teacherRegistrationSchema.safeParse(formData)
          if (!formDataV.success) {
               formDataV.error.errors.forEach(error => {
                    toast({

                         title: error.path.join(" -> "),
                         variant: "destructive",
                         description: error.message
                    })
                    return;
               })

               return;
          }
          const formDa = Object.entries(formDataV.data)

          SignUpMutation.mutate({
               type: "ADMIN",
               data: formDa
          });

          setFormData({
               firstName: '',
               lastName: '',
               email: '',
               phoneNumber: '',
               address: '',
               dateOfBirth: '',
               certification: '',
               yearsOfExperience: ''
          });







     }


     function SubmitStudentsRegistration() {
          const formDataV = studentSchema.safeParse(formDataStudent)
          if (!formDataV.success) {
               formDataV.error.errors.forEach(error => {
                    toast({

                         title: error.path.join(" -> "),
                         variant: "destructive",
                         description: error.message
                    })
                    return;
               })

               return;
          }
          const formDa = Object.entries(formDataV.data)
          SignUpMutation.mutate({
               type: "STUDENT",
               data: formDa
          });
          setFormDataStudent({
               firstName: '',
               lastName: '',
               email: '',
               phoneNumber: '',
               address: '',
               dateOfBirth: '',
               course: '',
               year: '',
               guardianName: '',
               guardianContact: '',
               emergencyContact: ''
          })

     }
     return (
          <div className=" h-14 w-full flex  flex-row-reverse  gap-5 items-center border-b border-border">
               <UserCard clap={false} userNumber={234234424} username="adeun" />

               <Dialog>
                    <DialogTrigger asChild>
                         <Button>new Instructor/teacher</Button>
                    </DialogTrigger>
                    <DialogContent className=" max-w-[700px]">
                         <DialogHeader>
                              <DialogTitle> Create Instructor/teacher</DialogTitle>
                              <DialogDescription>
                                   Creating a Instructor/teacher profile for registration.
                              </DialogDescription>
                         </DialogHeader>

                         {SignUpMutation.isPending ? (<>
                              <Loader />

                         </>) : (<>
                              <div className="flex flex-col ">
                                   <div className="grid grid-rows-2 items-center gap-1 w-">
                                        {/* First Name */}
                                        <Label htmlFor="firstName">
                                             First Name
                                        </Label>
                                        <Input id="firstName" value={formData.firstName} onChange={(e) => handleInputChange(e)} />
                                   </div>

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Last Name */}
                                        <Label htmlFor="lastName">
                                             Last Name
                                        </Label>
                                        <Input id="lastName" value={formData.lastName} onChange={(e) => handleInputChange(e)} />
                                   </div>

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Public Email */}
                                        <Label htmlFor="email">
                                             Public Email
                                        </Label>
                                        <Input

                                             type="email"
                                             id="email"
                                             value={formData.email}
                                             onChange={(e) => handleInputChange(e)}
                                        />
                                   </div>

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Phone Number */}
                                        <Label htmlFor="PhoneNumber">
                                             Phone Number
                                        </Label>
                                        <Input
                                             id="phoneNumber"
                                             type="number"
                                             value={formData.phoneNumber}
                                             onChange={(e) => handleInputChange(e)}
                                        />
                                   </div>

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Full Address */}
                                        <Label htmlFor="address">
                                             Full Address
                                        </Label>
                                        <Input id="address" value={formData.address} onChange={(e) => handleInputChange(e)} />

                                   </div>

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Additional Info: Date of Birth */}
                                        <Label htmlFor="dateOfBirth">
                                             Date of Birth
                                        </Label>
                                        <Input
                                             id="dateOfBirth" type="date" value={formData.dateOfBirth}
                                             onChange={(e) => handleInputChange(e)}
                                        />
                                   </div>

                                   {/* {assigned teacher with a class} */}

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Additional Info: Certification/License */}
                                        <Label htmlFor="certification">
                                             Certification/License
                                        </Label>
                                        <Input id="certification" onChange={(e) => handleInputChange(e)} />
                                   </div>

                                   <div className="grid grid-rows-2 items-center gap-1">
                                        {/* Additional Info: Years of Experience */}
                                        <Label htmlFor="yearsOfExperience">
                                             Years of Experience
                                        </Label>
                                        <Input
                                             id="yearsOfExperience"
                                             type="number"
                                             min="0"
                                             onChange={(e) => handleInputChange(e)}
                                        />
                                   </div>
                              </div>


                         </>)}
                         <DialogFooter>
                              <Button onClick={SubmitTeacherRegistration}> create teacher/instructor</Button>
                         </DialogFooter>
                    </DialogContent>
               </Dialog>




               <Dialog>
                    <DialogTrigger asChild>
                         <Button>new Students</Button>
                    </DialogTrigger>
                    <DialogContent className=" max-w-[700px]">
                         <DialogHeader>
                              <DialogTitle> create a student</DialogTitle>
                              <DialogDescription>
                                   Creating a student profile for registration.
                              </DialogDescription>
                         </DialogHeader>

                         {SignUpMutation.isPending ? (<>
                              <Loader />

                         </>) : (<>
                              <div className=" grid grid-cols-[repeat(auto-fill,_300px)] gap-4 ">
                                   {/* First Name */}
                                   <div className="grid grid-rows-2 items-center gap-1 ">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                             id="firstName"
                                             value={formDataStudent.firstName}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, firstName: e.target.value }))}
                                        />
                                   </div>

                                   {/* Last Name */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                             id="lastName"
                                             value={formDataStudent.lastName}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, lastName: e.target.value }))}
                                        />
                                   </div>

                                   {/* Email */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                             id="email"
                                             type="email"
                                             value={formDataStudent.email}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, email: e.target.value }))}
                                        />
                                   </div>

                                   {/* Phone Number */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="phoneNumber">Phone Number</Label>
                                        <Input
                                             id="phoneNumber"
                                             type="tel"
                                             value={formDataStudent.phoneNumber}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, phoneNumber: e.target.value }))}
                                        />
                                   </div>

                                   {/* Address */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="address">Full Address</Label>
                                        <Input
                                             id="address"
                                             value={formDataStudent.address}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, address: e.target.value }))}
                                        />
                                   </div>

                                   {/* Date of Birth */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                        <Input
                                             id="dateOfBirth"
                                             type="date"
                                             value={formDataStudent.dateOfBirth}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, dateOfBirth: e.target.value }))}
                                        />
                                   </div>



                                   {/* Course */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="course">Course</Label>
                                        <Input
                                             id="course"
                                             value={formDataStudent.course}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, course: e.target.value }))}
                                        />
                                   </div>

                                   {/* Year */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="year">Year</Label>
                                        <Input
                                             id="year"
                                             value={formDataStudent.year}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, year: e.target.value }))}
                                        />
                                   </div>

                                   {/* Guardian Name */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="guardianName">Guardian Name</Label>
                                        <Input
                                             id="guardianName"
                                             value={formDataStudent.guardianName}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, guardianName: e.target.value }))}
                                        />
                                   </div>

                                   {/* Guardian Contact */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="guardianContact">Guardian Contact</Label>
                                        <Input
                                             id="guardianContact"
                                             type="tel"
                                             value={formDataStudent.guardianContact}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, guardianContact: e.target.value }))} />
                                   </div>

                                   {/* Emergency Contact */}
                                   <div className="grid grid-rows-2 items-center gap-1">
                                        <Label htmlFor="emergencyContact">Emergency Contact</Label>
                                        <Input
                                             id="emergencyContact"
                                             type="tel"
                                             value={formDataStudent.emergencyContact}
                                             onChange={(e) => setFormDataStudent(pre => ({ ...pre, emergencyContact: e.target.value }))} />
                                   </div>


                              </div>


                         </>)}
                         <DialogFooter>
                              <Button onClick={SubmitStudentsRegistration}>Save changes</Button>
                         </DialogFooter>
                    </DialogContent>
               </Dialog>

          </div>
     );
}
