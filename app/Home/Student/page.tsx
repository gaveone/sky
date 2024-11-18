import Main from '@/components/ View/StudentMain'
import SideBar from '@/components/ View/sideBar'
import React from 'react'

export default async function page() {


  return (
  
      <main className=' flex flex-1 flex-cols'>
        <SideBar Item={null} />

        <Main />




      </main>

  

  )
}
