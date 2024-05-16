import DefaultLayout from "@/components/defaultLayout/DefaultLayout";
import React from "react";

import NotificationContent from "@/components/notificationContent/NotificationContent";
import Header from "@/components/shared/Header";

export default function page() {
  return (
    <DefaultLayout>
      <div className=" md:p-6 p-2">
        <Header />
        <NotificationContent />
      </div>
    </DefaultLayout>
  );
}
