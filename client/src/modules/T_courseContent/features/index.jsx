import * as React from "react";
import LessonCard from "../components/LessonCard";
import StudentList from "../components/StudentList";

export default function CourseContent() {
  const lessonCards = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/030d9b00d63b81e6f719b6f7e8206b1337aff9f348f265e2d43432c5376d84ef?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
      title: "Chủ đề lesson",
      requirements: "Yêu cầu của giảng viên"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/030d9b00d63b81e6f719b6f7e8206b1337aff9f348f265e2d43432c5376d84ef?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
      title: "Chủ đề lesson",
      requirements: "Yêu cầu của giảng viên"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/030d9b00d63b81e6f719b6f7e8206b1337aff9f348f265e2d43432c5376d84ef?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
      title: "Chủ đề lesson", 
      requirements: "Yêu cầu của giảng viên"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/030d9b00d63b81e6f719b6f7e8206b1337aff9f348f265e2d43432c5376d84ef?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
      title: "Chủ đề lesson",
      requirements: "Yêu cầu của giảng viên"
    }
  ];

  return (
    <div className="overflow-hidden pl-8 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 w-full max-md:mt-9 max-md:max-w-full">
            <div className="flex shrink-0 bg-teal-400 h-[50px] w-[50px]" />
            <div className="self-start mt-36 text-3xl font-semibold text-slate-800 max-md:mt-10 max-md:ml-2.5">
              Diễn đàn môn học
            </div>
            <div className="px-16 py-5 mt-5 text-base rounded-xl bg-amber-500 bg-opacity-30 text-slate-800 max-md:px-5 max-md:max-w-full">
              Tên diễn đàn
            </div>
            <div className="self-start mt-5 text-3xl font-semibold text-slate-800 max-md:ml-2.5">
              Lesson
            </div>
            <div className="flex gap-10 px-6 py-5 mt-4 bg-teal-400 rounded-xl max-md:px-5">
              <div className="flex flex-auto gap-4 text-white">
                <div className="text-xl font-black"></div>
                <div className="flex-auto text-base">
                  Lesson 01 : Introduction about XD
                </div>
              </div>
              <div className="text-base text-slate-800">30 mins</div>
            </div>
            {/* Remaining lesson items */}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-3 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between px-16 py-7 text-white bg-sky-950 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-5xl">TÊN MÔN HỌC</div>
                <div className="self-start mt-1.5 text-2xl">MÃ MÔN HỌC</div>
              </div>
              <div className="self-end mt-16 text-2xl text-center max-md:mt-10">
                Số lượng sinh viên
              </div>
            </div>
            <div className="flex flex-col items-start px-6 pt-12 pb-32 w-full bg-blue-300 bg-blend-normal max-md:pb-24 max-md:pl-5 max-md:max-w-full">
              <div className="ml-9 text-3xl text-black max-md:max-w-full">
                Lesson 01 : Introduction about XD
              </div>
              <div className="self-stretch mt-7 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {lessonCards.map((card, index) => (
                    <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <LessonCard {...card} />
                    </div>
                  ))}
                </div>
              </div>
              <StudentList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}