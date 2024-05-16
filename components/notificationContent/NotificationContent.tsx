import { Button } from "antd";
import React from "react";
import data from "../../shared/JSON/Index.json";
import Image from "next/image";
import roundImage from "@/public/Images/profileImages/round.svg";
export default function NotificationContent() {
  const todayData = data.NotificationToday;
  return (
    <div className="border rounded-md border-[#EAEAEA] my-7 p-4 md:p-10 md:px-20">
      <div className="flex justify-between items-center">
        <h2 className="md:text-2xl text-lg font-semibold ">Notification</h2>
        <div className="flex md:gap-4 gap-2">
          <Button className="bg-[#1A5EFF] rounded-lg md:w-13 w-12 h-11 text-white">
            All
          </Button>
          <Button className="bg-[#EAEAEA] border-[#EAEAEA] border rounded-lg  h-11 text-[#ADA7A7]">
            Unread ( 6 )
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-base font-medium text-[#ADA7A7]">Today</h2>
        {todayData.map((data,index) => (
          <div className="flex gap-5 ">
            <Image src={roundImage} alt="roundImage" width={50} height={50} />
            <div
             className={`flex justify-between py-5 w-full ${
                index !== todayData.length - 1 ? 'border-b border-[#F0F0F0]' : ''
              }`}
            >
              <div>
                <h1 className="text-base font-normal">{data.title}</h1>
                <h1 className="text-base font-normal text-[#A0A0A0]">
                  {data.description}
                </h1>
              </div>
              <h2 className="font-normal text-base text-[#A0A0A0]">
                {data.time}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-base font-medium text-[#ADA7A7] my-2">
          Yesterday, 8 August 2022
        </h2>
        {todayData.map((data,index) => (
          <div className="flex gap-5 ">
            <Image src={roundImage} alt="roundImage" width={50} height={50} />
            <div
             className={`flex justify-between py-5 w-full ${
                index !== todayData.length - 1 ? 'border-b border-[#F0F0F0]' : ''
              }`}
            >
              <div>
                <h1 className="text-base font-normal">{data.title}</h1>
                <h1 className="text-base font-normal text-[#A0A0A0]">
                  {data.description}
                </h1>
              </div>
              <h2 className="font-normal text-base text-[#A0A0A0]">
                {data.time}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
