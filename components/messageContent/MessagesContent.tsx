import React from "react";
import profile from "@/public/Images/messageImage/chatDP.svg";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TiVideo } from "react-icons/ti";
import { MdPersonAdd } from "react-icons/md";
import MessageSearchIcon from "@/public/customIcon/MessageSearchIcon";

interface UserMessage {
  id: number;
  name: string;
  text: string;
  time: string;
}

interface MessagesContentProps {
  userMessage: UserMessage;
  showInfo: boolean;
  setShowInfo: (show: boolean) => void;
}

const MessagesContent: React.FC<MessagesContentProps> = ({
  userMessage,
  setShowInfo,
  showInfo
}) => {
console.log(showInfo,'showInfo')
  return (
<div
  className={`border-x border-[#D6DFF6]`}
  style={{ width: showInfo ? '40%' : '100%' }}
>


    {/* <div className={`${showInfo ? "bg-red-400" :"bg-purple-500 w-100%"} border-x border-[#D6DFF6] `}> */}
      <div className="flex justify-between p-4 border-b border-[#D6DFF6]">
        <div className="flex gap-4 items-center ">
          <Image
            src={profile}
            alt="profile"
            width={60}
            height={50}
            className="rounded-full"
          />
          <div>
            <h1
              className="text-[#212633] font-bold text-xl cursor-pointer"
              onClick={() => setShowInfo(true)}
            >
              {userMessage.name}
            </h1>
            <h1 className="text-[#8E9ABB] font-normal text-sm">
              40 Member . <span className="text-[#34C759]">20 Online</span>
            </h1>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <MessageSearchIcon />
          <MdPersonAdd className="text-2xl text-[#B8C3E1]" />
          <IoMdSettings className="text-2xl text-[#B8C3E1]" />
          <div className="bg-[#1A5EFF] rounded-full p-2">
            <BiSolidPhoneCall className="text-2xl text-white" />
          </div>
          <div className="bg-[#1A5EFF] rounded-full p-2">
            <TiVideo className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
