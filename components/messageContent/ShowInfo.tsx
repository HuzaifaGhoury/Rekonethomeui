"use client";
import React from "react";
import Image from "next/image";
import profile from "@/public/Images/messageImage/chatDP.svg";
import { MdNotifications } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import DummyImage from "@/public/Images/messageImage/DummyBox.png";
import { Switch } from "antd";
import data from "@/shared/JSON/Index.json";
import { MdDelete } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';

import CloudIcon from "@/public/customIcon/CloudIcon";
import Leavegroup from "@/public/customIcon/Leavegroup";
interface UserMessage {
  id: number;
  name: string;
  text: string;
  time: string;
}
const useIsMobile = () => useMediaQuery({ maxWidth: 768 });

export default function ShowInfo({
  userMessage,
}: {
  userMessage: UserMessage;
}) {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const photos = [
    DummyImage,
    DummyImage,
    DummyImage,
    DummyImage,
    DummyImage,
    DummyImage,
    DummyImage,
    DummyImage,
  ];
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? "w-[100%] px-2 " : "w-[30%] px-4 "} border-x border-[#D6DFF6]`}>
      <div className=" h-64 flex flex-col items-center justify-center gap-3 text-center">
        <Image
          src={profile}
          alt="profile"
          width={120}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-[#212633] font-bold text-2xl cursor-pointer">
          {userMessage.name}
        </h1>{" "}
        <h1 className="text-[#8E9ABB] font-normal text-base">40 Members</h1>
      </div>
      <div className="py-2 my-2 px-5 border border-[#E2E9FC] rounded-xl text-[#212633]">
        <div className="flex justify-between border-b border-[#D6DFF6] py-3 ">
          <div className="flex gap-3 items-center text-base font-normal">
            <MdNotifications className="text-2xl text-[#1A5EFF]" />
            Notification
          </div>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="flex justify-between py-2 pt-3 items-center ">
          <div className="flex gap-3 items-center text-base font-normal">
            <IoPeople className="text-2xl text-[#1A5EFF]" />
            40 Member
          </div>
          <MdKeyboardArrowRight className="text-3xl text-[#F9357C]" />
        </div>
      </div>
      <div className="py-2 my-5  text-[#212633] border-b border-[#D6DFF6] ">
        <div className="flex justify-between items-center my-2">
          <h2 className="text-[#212633] font-medium text-sm">Image/Video</h2>
          <div className="flex gap-1  items-center">
            <h2 className="text-[#1A5EFF] font-normal text-sm cursor-pointer">
              See All
            </h2>{" "}
            <MdKeyboardArrowRight className="text-2xl text-[#F9357C]" />
          </div>
        </div>
        <div className="flex flex-wrap">
          {photos.map((photo, index) => (
            <div key={index} className="w-1/4 p-2">
              <Image
                src={photo}
                alt="profile"
                width={100}
                height={100}
                className="rounded-xl w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="py-2 my-5 text-[#212633] border-b border-[#D6DFF6] ">
        <div className="flex justify-between items-center my-2">
          <h2 className="text-[#212633] font-medium text-sm">File/Link</h2>
          <div className="flex gap-1  items-center">
            <h2 className="text-[#1A5EFF] font-normal text-sm cursor-pointer">
              See All
            </h2>{" "}
            <MdKeyboardArrowRight className="text-2xl text-[#F9357C]" />
          </div>
        </div>
        <div>
          {data.ReciveFileData.map((file, index) => (
            <div className=" py-2" key={file.id}>
              <div className="flex gap-3 items-center">
                <CloudIcon />
                <div>
                  <h1 className="text-[#212633] text-sm font-medium ">
                    {file.filename}
                  </h1>
                  <h2 className="text-[#8E9ABB] text-sm font-normal">
                    {file.date} . {file.size}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-2 my-5 text-[#212633] ">
        <h2 className="text-[#212633] font-medium text-sm">Security Setting</h2>
        <div className="py-2 my-2 px-5 border border-[#E2E9FC] rounded-xl text-[#212633]">
        <div className="flex justify-between border-b border-[#D6DFF6] py-3 ">
          <div className="flex gap-3 items-center cursor-pointer text-base font-normal text-[#FF0E00]">
            <MdDelete className="text-2xl " />
            Clear chat history
          </div>
        </div>
        <div className="flex justify-between py-2 pt-3 items-center ">
          <div className="flex gap-3 items-center cursor-pointer text-base font-normal text-[#FF0E00]">
            <Leavegroup/>
            Leave Group
          </div>
        </div>
      </div>
   
      </div>
    </div>
  );
}
