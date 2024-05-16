'use client'
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
        
        <div className="flex gap-2 ">
            <div className="">

            <Sidebar open={open} setOpen={setOpen}/>
            </div>
            <div className="flex-1 ">
                <div className="md:p-6 p-2">{children}</div>
            </div>
        </div>
        </>
    );
}
