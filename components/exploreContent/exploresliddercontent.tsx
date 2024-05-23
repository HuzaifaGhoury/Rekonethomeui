import React from 'react';
import data from '../../shared/JSON/data.json';
import { Button } from 'antd';
import Image from 'next/image';

const exploresliddercontent = () => {
    const exploreslidderData = data.exploreslidderData;

    return (
        <div className='w-full'>
            {exploreslidderData.map((text, index) => (
                <div key={index} className='bg-[#1E75FF] h-auto pb-6 rounded-lg' style={{ width: 'calc(40% - 40px)' }}>
                    <div className='ml-5 mt-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h1>{text.tittle}</h1>
                                <p>{text.tittletwo}</p>
                            </div>
                            <div><Button className='border-none bg-none'>{text.seeall}</Button></div>
                        </div>
                        <div className=''>
                            {Array(3).fill(0).map((_, i) => (
                                <div key={i} className="flex  gap-3">
                                    <div className='w-20 h-20  rounded-2xl mt-5 relative'>
                                        {text.image ? (
                                            <Image
                                                src={text.image}
                                                alt="cartimage"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg "
                                            />
                                        ) : (
                                            <p>Image not available</p>
                                        )}
                                    </div>
                                    <div className='bg-[#ffff] w-64 mt-5 rounded-lg'>
                                        <div>
                                            <p>{text.user}</p>
                                            <div className='flex gap-5'>
                                                <div><p>{text.study}</p></div>
                                                <div><Button className='w-auto'>{text.btncontent}</Button></div>
                                            </div>
                                            <p>{text.since}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default exploresliddercontent;
