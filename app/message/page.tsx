"use client";
import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import React, { useState } from "react";
import "../../assets/index.scss";
import ActiveProfile from "@/components/shared/AciveProfile";
import MessageList from "@/components/messageContent/MessageList";
import MessagesContent from "@/components/messageContent/MessagesContent";
import ShowInfo from "@/components/messageContent/ShowInfo";
import { useMediaQuery } from 'react-responsive';

interface UserMessage {
  id: number;
  name: string;
  text: string;
  time: string;
}
const useIsMobile = () => useMediaQuery({ maxWidth: 768 });

export default function ProfilePhoto() {
  const [userMessage, setUserMessage] = useState<UserMessage | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const isMobile = useIsMobile();

  return (
    <DefaultLayout>
      <div className="flex w-full">
      {!isMobile || !userMessage ? (
          // <div className="md:block w-full ">
            <MessageList setUserMessage={setUserMessage} setShowInfo={setShowInfo} />
          // </div>
        ) : null}
        {userMessage && Object.keys(userMessage).length > 0 && (!isMobile || !showInfo) && (
          
            <MessagesContent
              userMessage={userMessage}
              setShowInfo={setShowInfo}
              showInfo={showInfo}
            />
  
        )}
        {showInfo && userMessage && <ShowInfo userMessage={userMessage} />}
      </div>
    </DefaultLayout>
  );
}
