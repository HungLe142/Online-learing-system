import * as React from "react";
import { Link } from "react-router-dom";  // Nếu sử dụng React Router

export default function StudentRow({ id, name, email, score, avatar, isAlternate }) {
  return (
    <div className={`flex flex-wrap gap-10 py-3 pr-9 pl-3 w-full ${isAlternate ? 'bg-neutral-50' : ''} max-md:pr-5 max-md:max-w-full`}>
      <div className="grow my-auto">{id}</div>
      <div className="flex gap-2.5 self-start">
        <img
          loading="lazy"
          src={avatar}
          alt={`${name}'s avatar`}
          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
        />
        <div className="my-auto">{name}</div>
      </div>
      <div className="flex gap-10 text-center whitespace-nowrap max-md:max-w-full">
        <div className="text-lg basis-auto text-neutral-400">{email}</div>
        <div>{score}</div>
      </div>
      <div className="flex justify-center items-center text-center py-3">
        <Link 
          to={`/enter-grades/${id}`} 
          className="text-blue-500 hover:text-blue-700"
        >
          Enter Grades
        </Link>
      </div>
    </div>
  );
}
