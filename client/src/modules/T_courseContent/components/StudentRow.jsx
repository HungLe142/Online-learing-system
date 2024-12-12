import * as React from "react";

export default function StudentRow({ id, name, email, percentage, year, avatar, isAlternate }) {
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
        <div>{percentage}%</div>
        <div className="text-right">{year}</div>
      </div>
    </div>
  );
}