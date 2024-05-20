"use client";
import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import React, { useState } from "react";
import "../../assets/index.scss";
import ActiveProfile from "@/components/shared/AciveProfile";
import MessageList from "@/components/messageContent/MessageList";
import MessagesContent from "@/components/messageContent/MessagesContent";
import ShowInfo from "@/components/messageContent/ShowInfo";
interface UserMessage {
  id: number;
  name: string;
  text: string;
  time: string;
}

export default function ProfilePhoto() {
  const [userMessage, setUserMessage] = useState<UserMessage | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <DefaultLayout>
      <div className="flex   w-full">
        <MessageList
          setUserMessage={setUserMessage}
          setShowInfo={setShowInfo}
        />
        {userMessage && Object.keys(userMessage).length > 0 && (
          <MessagesContent
            userMessage={userMessage}
            setShowInfo={setShowInfo}
          />
        )}
        {showInfo && <ShowInfo userMessage={userMessage} />}
      </div>
    </DefaultLayout>
  );
}
