import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import React from "react";
import Header from "@/components/shared/Header";
import SettingContent from "@/components/settingContent/SettingContent";

export default function page() {
  return (
    <DefaultLayout>
      <div className="md:p-6 p-1">
        <Header />
        <SettingContent />
      </div>
    </DefaultLayout>
  );
}
