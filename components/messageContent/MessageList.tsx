"use client";
import { Input, Segmented } from "antd";
import ActiveProfile from "../shared/AciveProfile";
import BookMarkIcon from "@/public/customIcon/Bookmark";
import MessageSearchIcon from "@/public/customIcon/MessageSearchIcon";
import chatData from "@/shared/JSON/Index.json";
import Image from "next/image";
import profile from "@/public/Images/messageImage/chatDP.svg";
interface UserMessage {
    id: number;
    name: string;
    text: string;
    time: string;
}

interface MessageListProps {
    setUserMessage: (data: UserMessage) => void;
    setShowInfo: (show: boolean) => void;
  }
const MessageList: React.FC< MessageListProps> = ({ setUserMessage ,setShowInfo}) => {
  const handleClick = (data: {
    id: number;
    name: string;
    text: string;
    time: string;
  }) => {
    setUserMessage(data);
    setShowInfo(false)
  };

  return (
    <>
    <div className="w-[30%] px-6  border-x border-[#D6DFF6]">
      <div className="flex gap-4 items-center">
        <ActiveProfile />
        <h1 className="font-normal text-2xl">Barry</h1>
      </div>
      <div className="flex gap-2  my-6 justify-between w-full ">
        <div className="border border-[#D6DFF6] p-2  rounded-xl items-center flex gap-1">
          <MessageSearchIcon />
          <Input
            className="w-72"
            placeholder="People, groups, messeages..."
            style={{ border: "none", fontSize: "17px" }}
          />
        </div>
        <div className="border border-[#D6DFF6] w-14 justify-center p-2 rounded-xl flex items-center">
          <BookMarkIcon />
        </div>
      </div>
      <div className=" my-6 ">
        <h2 className="text-[#8E9ABB] text-base font-normal mb-3">
          FAVORITIES
        </h2>
        <div className="flex flex-col gap-2">
          {chatData.Favorites.map((data) => (
            <div
              className="flex gap-2 my-2 cursor-pointer hover:bg-[#F0F2F5] p-2 rounded-xl"
              key={data.id}
              onClick={() => handleClick(data)}
            >
              <Image
                src={profile}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className=" w-[62%]">
                <h1 className="text-[#212633] font-medium text-base">
                  {data.name}
                </h1>
                <h1 className="text-[#8E9ABB] text-sm font-normal">
                  {data.text}
                </h1>
              </div>

              <h1 className=" text-[#8E9ABB] text-xs font-normal">
                {data.time}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" my-6 ">
        <h2 className="text-[#8E9ABB] text-base font-normal mb-3">CHAT</h2>
        <div className="flex flex-col gap-2">
          {chatData.Chats.map((data) => (
            <div
              className="flex gap-2 my-2 cursor-pointer  hover:bg-[#F0F2F5] p-2 rounded-xl"
              key={data.id}
              onClick={() => handleClick(data)}
            >
              <Image
                src={profile}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className=" w-[62%]">
                <h1 className="text-[#212633] font-medium text-base">
                  {data.name}
                </h1>
                <h1 className="text-[#8E9ABB] text-sm font-normal">
                  {data.text}
                </h1>
              </div>

              <h1 className=" text-[#8E9ABB] text-xs font-normal">
                {data.time}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
    

    </>
  );
};

export default MessageList;
{
  /* <Segmented
        defaultValue="center"
        style={{ marginBottom: "8px", fontSize: "22px", padding: "6px" }}
        options={["start", "center"]}
      /> */
}
