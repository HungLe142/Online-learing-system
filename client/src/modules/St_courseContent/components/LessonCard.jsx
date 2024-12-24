import * as React from "react";

export default function LessonCard({ title, bgColor, onClick }) {
  return (
    <div 
      className={`flex gap-10 px-6 py-5 mt-4 rounded-xl ${bgColor} text-slate-800 max-md:px-5`}
      onClick={onClick}
    >
      <div className="flex flex-auto gap-4">
        <div className="text-xl font-black"></div>
        <div className="flex-auto text-base">{title}</div>
      </div>
    </div>
  );
}