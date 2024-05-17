"use client";
import React, { ChangeEvent, useRef } from "react";
import Image from "next/image";
import profilePic from "@/public/Images/profileImages/Mask group.png";
import InputField from "../shared/Input";
import { Button, Input } from "antd";

export default function AccountSetting() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };
  return (
    <div className="border rounded-md border-[#EAEAEA] my-4 p-6 ">
      <div className="flex justify-between items-center border-b pb-5 border-[#EAEAEA] ">
        <div className="flex gap-3 items-center ">
          <Image src={profilePic} alt="profilepic" width={70} height={100} />
          <h2 className="font-medium text-2xl mt-[-4px]">Barry</h2>
        </div>
        <div>
          <button
            onClick={handleButtonClick}
            className="text-[#1A5EFF] w-52 text-lg font-normal py-3 rounded-lg"
            style={{ backgroundColor: "rgba(26, 94, 255, 0.1)" }}
          >
            Upload new picture
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="flex my-5 justify-between">
        {/*Basic information */}
        <div className="w-[48%] ">
          <h1 className="font-medium text-lg ">Basic Information</h1>
          <h3 className="text-base font-normal text-[#A0A0A0] my-1 mb-5">
            Lorem Ipsum is simply dummy text.
          </h3>
          <div>
            <div className="flex gap-7 justify-between">
              <InputField
                label="Full Name"
                placeholder="Your Name"
                type="text"
              />
              <InputField
                label="Email"
                placeholder="Example@gmail.com"
                type="email"
              />
            </div>
            <div>
              <label className="text-base font-medium ">About Biography</label>
              <br />
              <Input.TextArea
                autoSize={{ minRows: 5, maxRows: 5 }}
                style={{
                  width: "100%",
                  marginTop: "0.75rem",
                  backgroundColor: "transparent",
                  padding: "10px",
                  border: "1px solid #EAEAEA",
                }}
                placeholder="Say something about you..."
              />
            </div>
          </div>
        </div>
        {/* More information */}
        <div className="w-[48%] ">
          {" "}
          <h1 className="font-medium text-lg">More Information</h1>
          <h3 className="text-base font-normal text-[#A0A0A0] my-1 mb-5">
            Lorem Ipsum is simply dummy text.
          </h3>
          <div className="flex gap-7 justify-between">
            <InputField
              label="Phone Number"
              placeholder="Phone Number"
              type="number"
            />
            <InputField label="Role" placeholder="Type your Role" type="text" />
          </div>{" "}
          <div className="flex gap-7 justify-between">
            <InputField
              label="Location"
              placeholder="Type your Location"
              type="text"
            />
            <InputField label="Website" placeholder="Example.com" type="text" />
          </div>
        </div>
      </div>
      <Button className="h-12 mt-3 bg-[#1A5EFF] px-6 text-white text-base rounded-lg">
        Save Changes
      </Button>
    </div>
  );
}
