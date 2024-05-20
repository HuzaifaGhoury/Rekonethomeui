import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import data from '../../shared/JSON/data.json';

const Navbar = () => {

const userImage = data.userData[0].userimage;

  return (
    <div className='w-full  p-4 flex justify-between'>
      <div className=' font-bold text-2xl text-[#212633]'>Explore</div>
      <div className='flex gap-4 '>
      <div style={{ position: 'relative', width: 'fit-content' }}>
  <Input
    className='w-60 border-none h-8 rounded-lg bg-[#F7F7F7] pr-8 text-[#92929D] ' // Added pr-8 for padding on the right side
    placeholder="Search..."
  />
  <Button
    className='absolute right-0 top-0 bg-[#1E75FF] border-none text-slate-50  ' // Added absolute positioning and adjusted padding
    type="text"
    icon={<SearchOutlined className='text-2xl font-bold' />}
    style={{ width: '40px' }} 
  />
</div>

        <div>
          <Button className=' bg-[#1E75FF]  text-slate-50  border-none '>Filter</Button>
        </div>
        <div>
          <Image src={userImage} alt='userimage' width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;