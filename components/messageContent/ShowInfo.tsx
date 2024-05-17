'use client';
import React from "react";
import Image from "next/image";
import profile from "@/public/Images/messageImage/chatDP.svg";
import { MdNotifications } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Switch } from 'antd';
interface UserMessage {
    id: number;
    name: string;
    text: string;
    time: string;
}

export default function ShowInfo({ userMessage }:{userMessage:UserMessage}) {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      };
  return (
    <div className="w-[30%] px-6  border-x border-[#D6DFF6]">
      <div className=" h-64 flex flex-col items-center justify-center gap-3 text-center">
        <Image
          src={profile}
          alt="profile"
          width={120}
          height={100}
          className="rounded-full"
        />
        <h1
          className="text-[#212633] font-bold text-2xl cursor-pointer"
        
        >
          {userMessage.name}
        </h1>{" "}
         <h1 className="text-[#8E9ABB] font-normal text-base">40 Members</h1>
      </div>
      <div className="p-4 pt-3 pb-4 pr-3 border border-[#E2E9FC] rounded-xl text-[#212633]">
        <div className="flex justify-between border-b border-[#D6DFF6] py-3 ">
            <div className="flex gap-3 items-center text-base font-normal"><MdNotifications className="text-2xl text-[#1A5EFF]"/>Notification</div>
            <Switch defaultChecked onChange={onChange} />
        </div>

      </div>
    </div>
  );
}
