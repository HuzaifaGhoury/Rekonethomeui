// ExploreContent.js
import React from 'react';
import data from '../../shared/JSON/data.json'; // Import all exports from data.js
import Image from 'next/image';
import { Button } from 'antd';


const ExploreContent = () => {
    const explorecardData = data.explorecardData; // Access the postData array from the imported data

    return (
        <div className='w-full bg-[#1E75FF] h-auto rounded-2xl p-4'>
            {explorecardData.map(card => (
                <div>
                    <h1 className='text-[#FFFFFF]'>{card.mainheading}</h1>
                    <p className='text-[#001C48]'>{card.headingtwo}</p>
                    <div className='  w-64  h-72 rounded-3xl bg-[#FFFFFF] '>
                        <Image src={card.image} alt={card.mainheading} className=' object-cover rounded-t-lg' width={350} height={100} />
                       <div className='pl-3 pt-4'>
                        <p className=' font-bold text-[#292932]  text-base'>{card.schoolname}</p>
                        <div className='flex gap-3 pt-2 text-[#92929D]'>
                            <p>{card.contentone}</p>

                            <li >{card.contenttwo}</li>

                        </div>
                        <div className='flex  gap-16 text-[#92929D]'>
                            <p>{card.contentthree}</p>
                            <p>{card.contentfour}</p>


                        </div>
                        <Button className='w-43'>{card.buttoncontent}</Button>
</div>


                    </div>

                </div>
                // <div key={card.id} className='card bg-white p-4 rounded-lg shadow-md mb-4'>
                //   <img src={card.image} alt={card.mainheading} className='w-full h-32 object-cover rounded-t-lg' />
                //   <h2 className='text-xl font-bold mt-2'>{card.mainheading}</h2>
                //   <h3 className='text-lg mt-1'>{card.headingtwo}</h3>
                //   <p className='mt-2'><strong>School:</strong> {card.schoolname}</p>
                //   <p><strong>Location:</strong> {card.contentone}</p>
                //   <p><strong>Students:</strong> {card.contenttwo}</p>
                //   <p><strong>Content:</strong> {card.contentthree}</p>
                //   <p><strong>Members:</strong> {card.contentfour}</p>
                //   <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'>{card.buttoncontent}</button>
                // </div>
            ))}
        </div>
    );
}

export default ExploreContent;

// <div className='w-full bg-[#1E75FF]  h-72 rounded-2xl'>

// </div>