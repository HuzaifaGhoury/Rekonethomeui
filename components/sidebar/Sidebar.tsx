"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";

import Image from "next/image";
import earthLogo from "@/public/Images/sidebarimage/png earth 1.svg";
import userImage from "@/public/Images/sidebarimage/onlinefriendimg1.svg";
import Link from "next/link";

const Sidebar = ({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const menus = [
    { name: "Home", link: "/homepage", icon: GoHomeFill },
    { name: "Profile", link: "/profile", icon: MdPerson },
    { name: "Messages", link: "/message", icon: BiSolidMessage },
    { name: "Group", link: "/group", icon: IoPeopleSharp, margin: true },
    { name: "Explore", link: "/explore", icon: MdExplore },
    { name: "Setting", link: "/explore", icon: IoMdSettings },
    { name: "notification", link: "/explore", icon: IoMdNotifications },
  ];

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#F7F7F7] min-h-screen ${
          open ? "w-72 px-7" : "w-[70px] px-4"
        } duration-500 text-[#023047] relative`}
      >
        <div className="flex justify-center">
          <Image src={earthLogo} width={140} height={100} alt="earth logo" />
        </div>
        {open && (
          <div className="flex h-12 items-center gap-4">
            <Image src={userImage} width={40} height={60} alt="user image" />
            <h2 className="font-bold text-base">Welcome Barry !</h2>
          </div>
        )}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` 
               group flex items-center h-12 text-base gap-3.5 font-medium p-2 hover:text-white hover:bg-[#1A5EFF] rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-4 left-4">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
