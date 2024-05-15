'use client'
import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import React from "react";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import '../../assets/index.scss'
import { FaChevronDown } from "react-icons/fa";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import profilePic from "@/public/Images/profileImages/Mask group.png";
import coverPhoto from "@/public/Images/profileImages/beautiful-nature-scenery-free-photo 2.png";
export default function ProfileCoverContent() {
  const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Posts',
      // children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'About',
      // children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Friends',
      // children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Photos',
      // children: 'Content of Tab Pane 3',
    },
    {
      key: '5',
      label: 'Videos',
      // children: 'Content of Tab Pane 3',
    },
    {
      key: '6',
      label: 'Reels',
      // children: 'Content of Tab Pane 3',
    },
    {
      key: '7',
      label: 'More',
      // children: 'Content of Tab Pane 3',
    },
  ];
  return (
    
      <div className="relative w-full h-auto">
        <Image src={coverPhoto} alt="coverphoto" width={2000} height={1000} />
        <div className="absolute cursor-pointer bottom-12 right-14 flex items-center bg-white rounded-lg p-2">
          <FaCameraRetro className="text-black" />
          <h2 className="text-black ml-2 text-sm font-semibold">
            Edit cover photo
          </h2>
        </div>
        <div className="absolute bottom-[-180px]  w-full flex justify-center">
          <div className="w-[92%] rounded-3xl h-52  px-6 bg-gradient-to-b from-transparent to-[#F7F7F7]">
            <div className="flex justify-between mx-16">
              <div className="flex gap-3 items-end  ">
                <Image
                  src={profilePic}
                  alt="profilepic"
                  width={130}
                  height={100}
                />
                <div className="mb-[10px]">
                  <h2 className="text-4xl font-bold text-[#1A5EFF]">Barry</h2>
                  <h4 className="text-xl font-normal">Future Engineer</h4>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <div className="bg-[#DAD9D9] px-2 rounded-md">
                  <SlOptions />
                </div>
                <button className="p-1 px-3 text-base font-medium bg-[#1A5EFF] text-white rounded-2xl">
                  Add Your Story
                </button>
                <button className="p-1 px-3 text-base font-medium bg-[#DAD9D9] text-black rounded-2xl">
                  Edit profile
                </button>
                <div className="bg-[#DAD9D9] p-1 rounded-md">
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
            </div>
            <hr className="text-[#E8E8E8] m-2"/>
            <div className="md:pl-20">
            <Tabs defaultActiveKey="1" className="text-3xl font-bold custom-tabs" items={items} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>


  );
}
