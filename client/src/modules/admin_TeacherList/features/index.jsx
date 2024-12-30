import * as React from "react";
import { Sidebar } from "../components/sidebar";
import TeachertList from "../components/table";


function Listteacher() {
  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:pl-5">
      <div className="flex flex-wrap gap-5 justify-between text-5xl text-white whitespace-nowrap max-md:max-w-full bg-sky-950">
        <div className="px-16 pt-7 pb-16  max-md:px-5 max-md:max-w-full">
          Students List
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col ml-5">
          <Sidebar />
          <div className="bg-[#9DCCFF] p-5 w-[76%]">
          <TeachertList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listteacher;