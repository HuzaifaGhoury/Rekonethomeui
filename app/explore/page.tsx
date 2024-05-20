import React from 'react'
import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import Navbar from '../../components/shared/Navbar'
import Explorecontent from '../../components/exploreContent/explorecontent';

const page = () => {
  return (
    <DefaultLayout>
<div className='w-full '>
  <Navbar/>
  <div className='ml-4 mt-7'>
    <Explorecontent/>
  </div>
</div>
    </DefaultLayout>
  
  )
}

export default page