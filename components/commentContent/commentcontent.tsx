import React from 'react'
import data from '../../shared/JSON/data.json'
import Image from 'next/image';
import { FaEllipsisV, FaRegCommentDots } from 'react-icons/fa';
import { TbLocationShare } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';
import {  CloseOutlined } from '@ant-design/icons';


const commentcontent = () => {

    const comentData = data.comentData;


  return (
    <div >
      <div className='flex mt-5 ml-2 justify-between'>
        <div className=' text-lg pl-2'>Messages</div>
        <div><CloseOutlined className='text-lg mr-3'/></div>
      </div>
      
  <div  className='ml-5 mt-7 border-2 border-yellow-950 shadow-lg  pb-11 '   style={{ width: 'calc(100% - 30px)' }}>
    {comentData.map(post => (
      <div key={post.id}>
        <div className='flex gap-4'>
          <div className='ml-5 mt-4'>
            <Image src={post.user} alt='postimg' width={50} height={50}/>
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
          <Image src={post.profileimg} alt='gallery' width={320} height={280}  />
          
        </div>
        <div>
          <p className='pl-5 pt-4 font-inter text-base font-medium text-slate-700'>{post.description}</p>
          <div className="border border-gray-300 mt-3   ml-5" style={{ width: 'calc(100% - 30px)' }}></div>
        </div>
        <div className='ml-4 mt-3 '>
          <div className='flex gap-7'>
           
              <CiHeart className='text-2xl  '/>
            <FaRegCommentDots className='text-2xl text-gray-300 cursor-pointer'  />
            <TbLocationShare className='text-2xl text-gray-300 ' />
            
          </div>
          
        </div>

       
    <div className='  border border-yellow-800 mt-7 ml-5 h-72 '  style={{ width: 'calc(100% - 30px)' }}>

    </div>
      </div>
    ))}
    </div>
  </div>
  )
}

export default commentcontent