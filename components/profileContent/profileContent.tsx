import React from "react";
import Image from "next/image";
import photoProfile from "@/public/Images/profileImages/Rectangle 31 (1).png";

import profileSecond from "@/public/Images/profileImages/Rectangle 32.png"
// import photo1 from "../../public/Images/profileImages/profilephoto1.svg";
// import photo2 from "../../public/Images/profileImages/profilephoto2.svg";
// import photo3 from "../../public/Images/profileImages/profilephoto3.svg";
// import photo4 from "../../public/Images/profileImages/profilephoto4.svg";
// import photo5 from "../../public/Images/profileImages/profilephoto5.svg";
// import photo6 from "../../public/Images/profileImages/profilephoto6.svg";
// import photo7 from "../../public/Images/profileImages/profilephoto7.svg";
// import photo8 from "../../public/Images/profileImages/profilephoto8.svg";
import memory from "../../public/Images/profileImages/Rectangle 31 (1).png";
// import inputPerson from "../../public/Images/profileImages/Mask group (1).svg";
import { Input } from "antd";
export default function ProfileContent() {
  // Array of photo URLs
  const photos = [
    photoProfile,
    profileSecond,
    // photo3,
    // photo4,
    // photo5,
    // photo6,
    // photo7,
    // photo8,
  ];
  return (
    <div className=" md:flex block  justify-between ">
      <div className="md:w-[39%]">
        <div className="bg-[rgb(26,94,255)] md:mt-1 mt-[226px] pt-2 pb-10 rounded-3xl">
          <h1 className="text-white text-xl font-bold mx-5 my-4">INTRO</h1>
          <div className="bg-white w-full h-10 text-center text-lg font-semibold flex items-center justify-center">
            Edit Details
          </div>
          <div className="bg-white w-full h-10 text-center text-lg font-semibold flex items-center justify-center mt-5">
            Add Hobbies
          </div>
          <div className="bg-white w-full h-10 text-center text-lg font-semibold flex items-center justify-center mt-5">
            Edit Featured
          </div>
        </div>
        <div className="bg-[#EEEAEA] p-7 h-auto my-3  md:my-6 rounded-3xl">
          <h1 className="text-black text-xl font-bold">PHOTOS</h1>
          <div className="flex flex-wrap justify-start gap-4 mt-2">
            {photos.map((photo, index) => (
              <div key={index} className="w-2/12">
                <Image
                  src={photo.src}
                  alt={`photo-${index}`}
                  width={80}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" md:w-[54%]">
        <div className="bg-[#1A5EFF] p-3 pb-7 rounded-2xl flex justify-center items-center text-center">
          <div className="flex relative mx-8  w-full">
            <Input
              placeholder="What's on your mind?"
              className="mt-4  h-14 pl-14 bg-[#F7F7F7] rounded-3xl"
            />
            {/* <Image
              src={inputPerson}
              alt="input person"
              width={80}
              className="absolute left-[-29px] top-1 "
              height={70}
            /> */}
          </div>
        </div>
        <div className="bg-[#EEEAEA] mt-5 rounded-2xl p-3">
          <div className="flex gap-2 items-center">
            {/* <Image
              src={inputPerson}
              alt="input person"
              width={70}
              height={70}
            /> */}
            <div>
              <h1 className="md:text-lg text-base font-semibold">
                <span className="md:text-xl text-base font-bold text-[#1A5EFF]">Barry </span>{" "}
                shared a post memory
              </h1>
              <h3 className="text-sm text-[#6D6C6C]">April 27 at 9:22 pm</h3>
            </div>
          </div>
          <div className=" md:mx-16 my-3 ">
            <Image src={memory} alt="memory" className=" h-80 w-full" />
            <hr className="my-4 border-[#000000]" />
            <div className="flex justify-between md:px-20 text-base font-medium">
              <h2 className="text-[#1A5EFF]">Like</h2>
              <h2>Comment</h2>
              <h2>Share</h2>
            </div>
            <hr className="my-4 border-[#000000]" />
            <div className="flex relative ml-6  ">
            <Input
              placeholder="What's on your mind?"
              className="mt-4  h-12 pl-14 bg-[#F7F7F7] rounded-3xl"
            />
            {/* <Image
              src={inputPerson}
              alt="input person"
              width={70}
              className="absolute left-[-29px] top-2 "
              height={70}
            /> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
