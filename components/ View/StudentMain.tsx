"use client"
import React, { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
type SC = {
   data: boolean, Duedate: boolean, Lecture: boolean, Quiz: boolean
}
// type cl = {
//   name: string,
//   type: string,
//   Duedate: string;
//   date: string;
//   Files: number;
// }

const jo = [
  {
    name: 'CSS Fundamentals',
    type: "Quiz",
    Duedate: "2023-09-10",
    date: "2023-04-07",
    Files: 5
  },
  {
    name: 'HTML Basics',
    type: "Quiz",
    Duedate: "2023-03-05",
    date: "2023-04-01",
    Files: 4
  },

  {
    name: 'Introduction to JavaScript',
    type: "Lecture",
    Duedate: "0",
    date: "2023-11-15",
    Files: 0
  },
  {
    name: 'Advanced JavaScript',
    type: "Lecture",
    Duedate: "0",
    date: "2023-06-20",
    Files: 5
  },
  {
    name: 'Web Accessibility',
    type: "Quiz",
    Duedate: "2023-06-01",
    date: "2023-05-28",
    Files: 5
  },
  {
    name: 'React Basics',
    type: "Quiz",
    Duedate: "2023-05-05",
    date: "2023-05-01",
    Files: 0
  },
  {
    name: 'Understanding APIs',
    type: "Lecture",
    Duedate: "0",
    date: "2023-05-10",
    Files: 5
  },

  {
    name: 'Rust Programming Basics',
    type: "Lecture",
    Duedate: "0",
    date: "2023-06-10",
    Files: 0
  },
  {
    name: 'Version Control with Git',
    type: "Lecture",
    Duedate: "0",
    date: "2023-08-01",
    Files: 0
  },
  {
    name: 'TypeScript Fundamentals',
    type: "Quiz",
    Duedate: "2023-07-15",
    date: "2023-07-12",
    Files: 5
  },

]



export default function Main() {
  const [classes, setClasses] = useState([
    {
      name: 'CSS Fundamentals',
      type: "Quiz",
      Duedate: "2023-09-10",
      date: "2023-04-07",
      Files: 5
    },
    {
      name: 'HTML Basics',
      type: "Quiz",
      Duedate: "2023-03-05",
      date: "2023-04-01",
      Files: 4
    },

    {
      name: 'Introduction to JavaScript',
      type: "Lecture",
      Duedate: "0",
      date: "2023-11-15",
      Files: 0
    },
    {
      name: 'Advanced JavaScript',
      type: "Lecture",
      Duedate: "0",
      date: "2023-06-20",
      Files: 5
    },
    {
      name: 'Web Accessibility',
      type: "Quiz",
      Duedate: "2023-06-01",
      date: "2023-05-28",
      Files: 5
    },
    {
      name: 'React Basics',
      type: "Quiz",
      Duedate: "2023-05-05",
      date: "2023-05-01",
      Files: 0
    },
    {
      name: 'Understanding APIs',
      type: "Lecture",
      Duedate: "0",
      date: "2023-05-10",
      Files: 5
    },

    {
      name: 'Rust Programming Basics',
      type: "Lecture",
      Duedate: "0",
      date: "2023-06-10",
      Files: 0
    },
    {
      name: 'Version Control with Git',
      type: "Lecture",
      Duedate: "0",
      date: "2023-08-01",
      Files: 0
    },
    {
      name: 'TypeScript Fundamentals',
      type: "Quiz",
      Duedate: "2023-07-15",
      date: "2023-07-12",
      Files: 5
    },

  ])

  const [sortingConfig, setSortingConfig] = useState<SC>({
    Lecture: true,
    Quiz: true,
    data: false,
    Duedate: false
  })



  // Fetch the Class data
  useEffect(() => {

    setClasses(jo)
    setClasses(prev => {
      const A = prev.filter((a) => {
        if (sortingConfig.Lecture && sortingConfig.Quiz) {
          return true; // Keep all if both are true
        }
         if (sortingConfig.Lecture && !sortingConfig.Quiz){
          return a.type === "Lecture";
        } 
        if (sortingConfig.Quiz && !sortingConfig.Lecture){
          return a.type === "Quiz";
        }

        return false;

      })


      if (sortingConfig.data || sortingConfig.Duedate) {
        A.sort((first, second) => {
          const dateA = new Date(first.date).getTime();
          const dateB = sortingConfig.Duedate ? new Date().getTime() : new Date(second.date).getTime();
          return dateA - dateB; // Ascending order
        });
      }
      return A


    })


  }, [sortingConfig])





  return (
    <main className=' h-full w-full flex flex-col'>
      {/* Main content */}
      <nav className='  w-full h-14 flex flex-col justify-center border-b'>
        <h1> web development 2233</h1>


      </nav>
      <section className=' flex-grow p-2'>
        {/* Filter bar */}
        <div className=' flex flex-row gap-3 p-3'>
          <div className="flex items-center space-x-2">
            <Checkbox checked={sortingConfig.Quiz} id="Quiz" onClick={() => {
        
              setSortingConfig(pre => ({ ...pre, Quiz:!pre.Quiz }))
            }

            } />
            <label
              htmlFor="Quiz"
              className="text-sm font-medium leading-none"
            >
              Quiz
            </label>

          </div>

          <div className="flex items-center space-x-2">
            <Checkbox checked={sortingConfig.Lecture} id="Lecture" onClick={() => { setSortingConfig(pre => ({ ...pre, Lecture:!pre.Lecture })) }} />
            <label
              htmlFor="Lecture"
              className="text-sm font-medium leading-none"
            >
              Lecture
            </label>

          </div>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead className="w-[100px]">type</TableHead>
              <TableHead className="w-[100px]" >Attachments</TableHead>
              <TableHead className="text-right">Due date</TableHead>
              <TableHead className="text-right"> date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map(classC => (
              <TableRow key={classC.name}>
                <TableCell className="font-medium overflow-y-scroll">{classC.name}</TableCell>
                <TableCell><Badge variant="outline">{classC.type}</Badge></TableCell>
                <TableCell className="text-right">{classC.Files}</TableCell>
                <TableCell className="text-right">{classC.Duedate === "0" ? "-------------" : classC.Duedate}</TableCell>
                <TableCell className="text-right">{classC.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>


      </section>


    </main>
  )
}
