"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import NotificationContent from "../notificationContent/NotificationContent";
import AccountSetting from "./AccountSetting";

export default function SettingContent() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span className="flex  items-center gap-2">
          <IoPersonSharp />
          Account
        </span>
      ),
      children: <AccountSetting/>
    },
    {
      key: "2",
      label: (
        <span className="flex  items-center gap-2">
          <IoMdNotifications />
          Notification
        </span>
      ),
      children: <NotificationContent />,
    },
  ];
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-2xl">General Settings</h2>
      <h3 className="text-[#A0A0A0] text-base font-normal mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <div className="my-4">
        <Tabs
          defaultActiveKey="1"
          className="text-2xl font-medium  "
          items={items}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
