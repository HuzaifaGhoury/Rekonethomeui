import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import ProfileCoverContent from "@/components/profileContent/ProfileCoverContent";
import ProfileContent from "@/components/profileContent/profileContent";
import React from "react";

export default function page() {
  return (
    <DefaultLayout>
      <ProfileCoverContent />
      <div className="mt-40 md:p-20">
        <ProfileContent />
      </div>
    </DefaultLayout>
  );
}
