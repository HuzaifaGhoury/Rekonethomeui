import { Avatar, Badge } from "antd";
import profileImage from "@/public/Images/profileImages/Mask group.png";
import React from "react";
import "../../assets/index.scss";

export default function ActiveProfile() {
  return (
    <div>
      <Badge className="custom-badge" dot status="success" offset={[-10, 48]}>
        <Avatar src={profileImage.src} size={64} />
      </Badge>
    </div>
  );
}
