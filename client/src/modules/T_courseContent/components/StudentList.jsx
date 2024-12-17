import * as React from "react";
import StudentRow from "./StudentRow";

const students = [
  {
    id: "PRE2209",
    name: "John Smith",
    email: "jessica.hansome@example.com",
    score: "98",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/82e9008a67943f5a9dc80a4acf671eb3c7aae97f45a9d4e480c81f78904c9530?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
  },
  {
    id: "PRE1245",
    name: "Jolie Hoskins", 
    email: "jessica.hansome@example.com",
    score: "99.5",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/32b5b0022b60cd5e4aba885959982467e0e6aae7b18e86474399a75b2dda5205?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
  },
  {
    id: "PRE1625",
    name: "Pennington Joy",
    email: "jessica.hansome@example.com", 
    score: "99.6",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/af678d811931f6046b3821bd6f62553d68c913bab0141dd3b88c0ce2461127c5?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
  },
  {
    id: "PRE2516",
    name: "Millie Marsden",
    email: "jessica.hansome@example.com",
    score: "98.2", 
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc0aaae4fd2ae634cd199a1d830438346cea320340f861d9be2bf30ee8d97a57?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
  },
  {
    id: "PRE2209",
    name: "John Smith",
    email: "jessica.hansome@example.com",
    score: "98",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f14b0ba87b45413eb7e6cef1b8b9f41ceac43ca86db6d3bd59cfbb9244359524?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
  }
];

export default function StudentList() {
  return (
    <div className="flex flex-col items-center self-center pb-6 mt-32 mb-0 max-w-full bg-white rounded-2xl min-h-[739px] shadow-[0px_0px_31px_rgba(44,50,63,0.02)] w-[1225px] max-md:mt-10 max-md:mb-2.5">
      <div className="text-2xl font-semibold leading-6 text-black">List Students</div>
      <div className="flex overflow-hidden items-start mt-6 max-w-full text-base w-[902px]">
        <div className="flex flex-col pb-px min-h-[605px] min-w-[240px] w-[902px] max-md:max-w-full">
          <div className="flex flex-wrap items-start w-full font-semibold text-center whitespace-nowrap text-zinc-600 max-md:max-w-full">
            <div className="grow shrink pt-3 pr-10 pb-3.5 pl-3 bg-gray-50 border-b border-slate-100 w-[104px] max-md:pr-5">ID</div>
            <div className="grow shrink pt-3 pr-5 pb-3.5 pl-3 bg-gray-50 border-b border-slate-100 w-[188px]">Name</div>
            <div className="flex-1 grow shrink px-8 pt-3 pb-3.5 bg-gray-50 border-b border-slate-100 min-w-[240px] w-[267px] max-md:px-5">Email</div>
            <div className="grow shrink pt-3 pr-9 pb-3.5 pl-10 bg-gray-50 border-b border-slate-100 w-[129px] max-md:px-5">Score</div>
            <div className="grow shrink py-3 pr-3 pl-12 text-right bg-gray-50 border-b border-slate-100 min-h-[47px] w-[94px] max-md:pl-5">Action</div>
          </div>
          <div className="flex flex-col w-full max-w-[901px] text-stone-500 max-md:max-w-full">
            {students.map((student, index) => (
              <StudentRow
                key={`${student.id}-${index}`}
                {...student}
                isAlternate={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}