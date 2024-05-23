"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../shared/Navbar";
import NavbarMain from "../navbar/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <div className="flex gap-2 ">
        <div className="md:hidden flex">
          <NavbarMain />
        </div>
        <div className="md:flex hidden">
          <Sidebar open={open} setOpen={setOpen} />
        </div>
        <div className="flex-1 md:mt-1 mt-20 ">
          <div className="md:p-6 p-1">{children}</div>
        </div>
      </div>
    </>
  );
}
