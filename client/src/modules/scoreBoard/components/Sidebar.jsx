import * as React from "react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
const menuItems = [
  { text: "Information", bgColor: "bg-blue-300", to: { pathname: ENDPOINTS.USER.INFO } },
  { text: "Edit information", bgColor: "bg-red-400", to: { pathname: ENDPOINTS.USER.EDIT_INFO} },
  { text: "Scoreboard", bgColor: "bg-amber-500", to: { pathname: ENDPOINTS.USER.SCOREBOARD } }
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-10 text-3xl font-semibold text-slate-800 max-md:mt-10 max-md:max-w-full">
        <div className="self-start ml-6 text-xl font-black text-white max-md:ml-2.5" />
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.to} 
            className={`px-16 py-2.5 mt-${index === 0 ? '8' : '9'} whitespace-nowrap rounded-xl ${item.bgColor} bg-opacity-30 max-md:px-5 max-md:max-w-full`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}