"use client"
import React from 'react'
import Aheader from './Aheader'
import SemesterCard from './SemesterCard';
import SearchList from './SearchList';
import { usePageTransition } from '@/components/PageAnimation';


const fgo = [
     {
          Season: "Winter Semester",
          TotalStudents: 500,
          PaidStudents: 450,
          DroppedOut: 20,
          PaidPercentage: function () {
               return (this.PaidStudents / this.TotalStudents * 100).toFixed(2) + "%";
          }
     },
     {
          Season: "Spring Semester",
          TotalStudents: 600,
          PaidStudents: 550,
          DroppedOut: 25,
          PaidPercentage: function () {
               return (this.PaidStudents / this.TotalStudents * 100).toFixed(2) + "%";
          }
     },
     {
          Season: "Summer Semester",
          TotalStudents: 300,
          PaidStudents: 250,
          DroppedOut: 15,
          PaidPercentage: function () {
               return (this.PaidStudents / this.TotalStudents * 100).toFixed(2) + "%";
          }
     },
     {
          Season: "Fall Semester",
          TotalStudents: 700,
          PaidStudents: 650,
          DroppedOut: 30,
          PaidPercentage: function () {
               return (this.PaidStudents / this.TotalStudents * 100).toFixed(2) + "%";
          }
     }
];


export default function AdminClientView() {
     function getCurrentSemester() {
          const now = new Date(); // Current date
          const month = now.getMonth(); // Month (0 = January, 11 = December)
      
          // Define semester ranges
          if (month >= 0 && month <= 2) {
              return "Winter"; // January, February, March
          } else if (month >= 3 && month <= 5) {
              return "Spring"; // April, May, June
          } else if (month >= 6 && month <= 8) {
              return "Summer"; // July, August, September
          } else if (month >= 9 && month <= 11) {
              return "Fall"; // October, November, December
          }else{
               return "null"
          }
      }
     return (
          <>
           
               <Aheader />
               <div className=' flex flex-row gap-6 items-center justify-center p-3'>
                    {fgo.map(sem=>{
                         const iSS = sem.Season.includes(getCurrentSemester())
                         return(<SemesterCard key={sem.Season} IsSemester={iSS} op={sem}/>)
                    })}


               </div>

               <SearchList/>

          </>
     )
}
