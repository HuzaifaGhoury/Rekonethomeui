"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";


export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="flex gap-2">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`flex-1 transition-all duration-500 ${
          open ? "ml-72" : "ml-[70px]"
        } md:ml-0`}
      >
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
