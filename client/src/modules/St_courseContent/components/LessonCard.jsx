import * as React from "react";

export default function LessonCard({ title, duration, isActive, bgColor }) {
  return (
    <div className={`flex gap-10 px-6 py-5 mt-4 rounded-xl ${bgColor} text-slate-800 max-md:px-5`}>
      <div className="flex flex-auto gap-4">
        <div className="text-xl font-black"></div>
        <div className="flex-auto text-base">{title}</div>
      </div>
      <div className="text-base">{duration}</div>
    </div>
  );
}