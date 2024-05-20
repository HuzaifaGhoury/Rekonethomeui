'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdSettings } from 'react-icons/io';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TiVideo } from 'react-icons/ti';
import { MdPersonAdd } from 'react-icons/md';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import EmojiPicker from 'emoji-picker-react';
import { FaSmile } from 'react-icons/fa';
import profile from '@/public/Images/messageImage/chatDP.svg';
import ProfileAdd from '@/public/customIcon/ProfileAdd';
import SearchZone from '@/public/customIcon/SearchZone';
import data from "@/shared/JSON/Index.json"
import Emoji from "@/public/Images/messageImage/Emoji.png"
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
  showInfo,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setInputValue((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false); 
  };
  
  return (
    <div
      className={`border-x border-[#D6DFF6]`}
      style={{ width: showInfo ? '43%' : '100%' }}
    >
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
              className="text-[#212633] font-bold md:text-xl text-sm cursor-pointer"
              onClick={() => setShowInfo(true)}
            >
              {userMessage.name}
            </h1>
            <h1 className="text-[#8E9ABB] font-normal text-sm">
              40 Member . <span className="text-[#34C759]">20 Online</span>
            </h1>
          </div>
        </div>
        <div className="flex md:gap-4 gap-1 items-center">
       

          <SearchZone />
      
          <ProfileAdd />
          <IoMdSettings className="text-2xl text-[#B8C3E1]" />
          <div className="bg-[#1A5EFF] rounded-full p-2">
            <BiSolidPhoneCall className="md:text-2xl text-base text-white" />
          </div>
          <div className="bg-[#1A5EFF] rounded-full p-2">
            <TiVideo className="md:text-2xl text-base text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen max-h-[85vh]  text-[#212633] p-4">
      <div className="flex-grow overflow-y-auto p-4">
      {data.messages.map((message) => (
        <div key={message.id} className={`flex ${message.role === 'sender' ? 'justify-end' : 'justify-start'}`}>
          <div className={`p-3 m-2 rounded-3xl ${message.role === 'sender' ? 'bg-[#1A5EFF] text-white ' : ' border border-[#E2E9FC] text-black'}`}>
            <p>{message.text}</p>
        
          </div>
        </div>
      ))}
    </div>
        <div className="relative flex items-center mt-4 gap-3">
          <div className="relative w-full">
            <button
              className="absolute left-0 top-0 h-full flex items-center pl-3"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <Image src={Emoji} alt="profile" width={25} height={30} />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-full mb-2">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <input
              type="text"
              className="flex-grow w-full border border-[#D6DFF6] rounded-[36px] pl-10 pr-5 p-3"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button className="bg-[#1A5EFF] text-white rounded-full p-3">
            <PiPaperPlaneRightFill className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
