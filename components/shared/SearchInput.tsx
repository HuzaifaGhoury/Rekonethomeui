import React from "react";
import { Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  const suffix = (
    <AiOutlineSearch
      style={{
        color: "rgba(0,0,0,.45)",
        fontSize: 25,
        fontWeight: "bold",
        cursor: "pointer",
      }}
    />
  );

  return (
    <Input
      placeholder="Search..."
      prefix={suffix}
      className="h-11 border-2 rounded-lg border-[#EAEAEA] w-64 md:w-80"
    />
  );
};

export default SearchInput;
