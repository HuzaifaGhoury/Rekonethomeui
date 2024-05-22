"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings, IoMdNotifications } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { MdPerson, MdExplore } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function NavbarMain() {
  const [activeMenu, setActiveMenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  const menus = [
    { name: "Home", link: "/home", icon: GoHomeFill },
    { name: "Profile", link: "/profile", icon: MdPerson },
    { name: "Messages", link: "/message", icon: BiSolidMessage },
    { name: "Group", link: "/group", icon: IoPeopleSharp, margin: true },
    { name: "Explore", link: "/explore", icon: MdExplore },
    { name: "Setting", link: "/setting", icon: IoMdSettings },
    { name: "notification", link: "/notification", icon: IoMdNotifications },
  ];

  return (
    <div className="bg-[#1A5EFF] h-[70px] w-full fixed z-10">
      <div className="flex justify-between items-center p-2">
        {menus.map((menu, i) => (
          <Link
            href={menu.link}
            key={i}
            className={`group flex items-center h-12 text-base gap-3.5 font-medium p-2 rounded-md ${
              activeMenu === menu.link ? "text-white" : "text-[#B8C3E1]"
            }`}
            onClick={() => setActiveMenu(menu.link)}
          >
            <div>{React.createElement(menu.icon, { size: "25" })}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
