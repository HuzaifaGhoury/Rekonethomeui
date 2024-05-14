import React from "react";
import Sidebar from "../sidebar/Sidebar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-2">
            <Sidebar />
            <div className="flex-1">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
