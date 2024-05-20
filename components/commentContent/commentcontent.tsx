import React from 'react'
import data from '../../shared/JSON/data.json'
import Image from 'next/image';
import { FaEllipsisV, FaRegCommentDots } from 'react-icons/fa';
import { TbLocationShare } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';


const commentcontent = () => {

    const comentData = data.comentData;


  return (
    <div className='h-auto  pb-5 rounded-lg shadow-md border border-red-950'>
    {comentData.map(post => (
      <div key={post.id}>
        <div className='flex gap-4'>
          <div className='ml-5 mt-4'>
            <Image src={post.user} alt='postimg' width={45} height={45}/>
          </div>
          <div className='flex justify-between w-full'>
            <div className='mt-3 '>
              <h2 className='font-inter font-semibold text-slate-800'>{post.name}</h2>
              <p className='font-inter text-slate-400'>{post.activeseen}</p>
            </div>
            <div className='mt-6 mr-5 '>
              <FaEllipsisV className='h-6 text-gray-400'/>
            </div>
          </div>
        </div>

        <div className='flex gap-5 w-full pl-4 pt-4'>
          <Image src={post.profileimg} alt='gallery' width={300} height={280}  />
          
        </div>
        <div>
          <p className='pl-5 pt-4 font-inter text-base font-medium text-slate-700'>{post.description}</p>
          <div className="border border-gray-300 mt-3 w-72 ml-5"></div>
        </div>
        <div className='ml-4 mt-3 '>
          <div className='flex gap-7'>
            {/* <div className='flex  w-16 p-1 ml-2 pl-2'> */}
           
              <CiHeart className='text-2xl '/>
            {/* </div> */}
            <FaRegCommentDots className='text-2xl text-gray-300 mt-1 cursor-pointer'  />
            <TbLocationShare className='text-2xl text-gray-300 mt-1' />
            
          </div>
        </div>

        {/* <div className='border border-red-800 w-full h-60 '>

        </div> */}
      </div>
    ))}
  </div>
  )
}

export default commentcontent