import React from 'react';
import data from '../../shared/JSON/data.json';
import Image from 'next/image';
import { Button } from 'antd';

const ExploreContent = () => {
  const explorecardData = data.explorecardData;
  const mainHeading = "Educational Institute Near You"; 
  const headingTwo = "Students Near You"; 
  return (
    <div className='w-full bg-[#1E75FF] h-auto rounded-2xl p-4'>
      <h1 className='text-[#ffff] text-base font-bold'>{mainHeading}</h1>
      <p className='text-[#001C48]'>{headingTwo}</p>
      <div className='flex justify-between space-x-4 mt-4'>
        {explorecardData.map((card, index) => (
          <div key={index} className='w-50 mb-5'>
            <div className='mt-5 h-64 rounded-3xl bg-[#FFFFFF] '>
              <Image src={card.image} alt="cartimage" className='object-cover rounded-t-lg' width={350} height={100} />
              <div className='pl-3 pt-4'>
                <div className=' font-bold tex'>
                    <p>{card.schoolname}</p>
                </div>
                <div className='flex gap-3 pt-2 text-[#92929D]'>
                  <p>{card.contentone}</p>
                  <li>{card.contenttwo}</li>
                </div>
                <div className='flex gap-16 text-[#92929D]'>
                  <p>{card.contentthree}</p>
                  <p>{card.contentfour}</p>
                </div>
               <div className=''>
                <Button className='   bg-[#1E75FF] text-[#ffff] border-none rounded-md'>
                  {card.buttoncontent}
                </Button>
               </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreContent;
