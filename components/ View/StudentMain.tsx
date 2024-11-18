"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
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
  type: "Quiz" | "Lecture" | null, data: boolean, Duedate: boolean
}

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
    type: "Lecture",
    data: false,
    Duedate: false
  })



  // Fetch the Class data
  useEffect(() => {
    if (sortingConfig.type) {
      setClasses(jo)
      setClasses(prev => {
        const A = prev.filter((a) => a.type === sortingConfig.type)
        if (sortingConfig.data) {
          A.sort((first, second) => {
            const DateA = new Date(first.date).getTime();
            const DateB = new Date(second.date).getTime();
            return (DateA - DateB)
          })

        }
        if (sortingConfig.Duedate) {
          A.sort((first) => {
            const DateA = new Date(first.date).getTime();
            const DateB = new Date().getTime();

            return (DateA - DateB)


          })

        }

        return A


      })





    }


  }, [sortingConfig])





  return (
    <main className=' h-full w-full flex flex-col'>
      {/* Main content */}
      <nav className='  w-full h-14 flex flex-col justify-center border-b'>
        <h1> web development 2233</h1>


      </nav>
      <section className=' flex-grow p-2'>
        {/* Filter bar */}
        <div className=' flex flex-row gap-2'>
          <Button onClick={() => setSortingConfig(perConfig => ({ ...perConfig, type: "Quiz" }))}> Only Quiz</Button>
          <Button onClick={() => setSortingConfig(perConfig => ({ ...perConfig, type: "Lecture" }))}> Only Lecture</Button>
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
