import React from "react";
import Image from "next/image";
import profilePic from "@/public/Images/profileImages/userProfile.svg";
import SearchInput from "./SearchInput";
export default function Header() {
  return (
    <div className="md:flex justify-between ">
      <div>
        <h1 className="text-3xl font-medium text-[#3E435D]">Welcome, Barry</h1>
        <h1 className="text-[#ADA7A7] text-base font-light my-2">
          Sun,28 April 2024
        </h1>
      </div>
      <div className="flex gap-2 md:items-start justify-between ">
        <SearchInput />
        <Image src={profilePic} alt="profilepic" width={45} height={100} />
      </div>
    </div>
  );
}
