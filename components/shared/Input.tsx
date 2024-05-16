import { Input } from "antd";
import React from "react";

export default function InputField({
  placeholder,
  label,
  type,
}: {
  type: string;
  placeholder: string;
  label: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium ">{label}</label>
      <br />
      <Input
        className=" h-12 border my-2 bg-transparent border-[#EAEAEA] text-base"
        style={{ width: 340 }}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
