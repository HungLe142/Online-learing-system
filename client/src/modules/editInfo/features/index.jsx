import * as React from "react";
import { Sidebar } from "../components/Sidebar";
import UserProfile from "../components/UserProfile";

function EventInformationPage() {
  return (
    <div className="flex overflow-hidden flex-col pl-5 bg-white max-md:pl-5">
      <div className="flex flex-wrap gap-5 justify-between text-5xl text-white whitespace-nowrap max-md:max-w-full">
        <div className="flex shrink-0 self-start mt-7 bg-teal-400 h-[50px] w-[50px]" />
        <div className="px-16 pt-7 pb-16 bg-sky-950 max-md:px-5 max-md:max-w-full">
          Information
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default EventInformationPage;