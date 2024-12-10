import * as React from "react";
import { Sidebar } from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import  icons_back from "../../../assets/icons/icon_back.png";
function InformationPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:pl-5">
      <div className="flex flex-wrap gap-5 justify-between text-5xl text-white whitespace-nowrap max-md:max-w-full bg-sky-950">
            <Link to={ENDPOINTS.USER.HOME} className="flex shrink-0 bg-teal-400 h-[50px] w-[50px] items-center justify-center">
              <img src={icons_back} alt="" className="h-10 w-10"/>
            </Link>
        <div className="px-16 pt-7 pb-16  max-md:px-5 max-md:max-w-full">
          Information
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col ml-5">
          <Sidebar />
          <div className="bg-[#9DCCFF] p-5 w-[76%]">
          <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPage;