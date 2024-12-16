import * as React from "react";
import LessonCard from "../components/LessonCard";
import ContentCard from "../components/ContentCard";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import  icons_back from "../../../assets/icons/icon_back.png";
//import courseDataProcess from "../services/course_data_process";

const lessons = [ // classes
  { title: "Lesson 01 : Introduction about XD", duration: "30 mins", bgColor: "bg-teal-400" },
  { title: "Lesson 02: Introduction about XD", duration: "30 mins", bgColor: "bg-amber-500 bg-opacity-30" },
  { title: "Lesson 03 : Introduction about XD", duration: "30 mins", bgColor: "bg-blue-300 bg-opacity-30" },
  { title: "Lesson 04 : Introduction about XD", duration: "30 mins", bgColor: "bg-red-400 bg-opacity-30" }
];

const exercises = [ // materials in a class
  { title: "Lesson 00001 : Introduction about XD", duration: "30 mins", bgColor: "bg-blue-300 bg-opacity-30" },
  { title: "Lesson 01 : Introduction about XD", duration: "30 mins", bgColor: "bg-amber-500 bg-opacity-30" },
];

const contentCards = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/814d904cbf8b0127bfeb9ed592c731c9807ae1a3045dc990c88bf615d23d7f3a?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    title: "Chủ đề lesson",
    requirement: "Yêu cầu của giảng viên"
  }
];

export default function CourseContent() {
  return (
    <div className="overflow-hidden pl-8 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 w-full max-md:mt-8 max-md:max-w-full">
            <Link to={ENDPOINTS.USER.HOME} className="flex shrink-0 bg-teal-400 h-[50px] w-[50px] items-center justify-center">
            <img src={icons_back} alt="" className="h-10 w-10"/>
            </Link>
            <div className="self-start mt-36 text-3xl font-semibold text-slate-800 max-md:mt-10 max-md:ml-2.5">
              Diễn đàn môn học
            </div>
            <div className="px-16 py-5 mt-5 text-base rounded-xl bg-amber-500 bg-opacity-30 text-slate-800 max-md:px-5 max-md:max-w-full">
              Tên diễn đàn
            </div>
            <div className="self-start mt-5 text-3xl font-semibold text-slate-800 max-md:ml-2.5">
              Class
            </div>
            {lessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}

          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-1.5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between px-16 py-7 text-white bg-sky-950 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-5xl">TÊN MÔN HỌC</div>
                <div className="self-start mt-1.5 text-2xl">MÃ MÔN HỌC</div>
              </div>
              <div className="self-end mt-16 text-2xl max-md:mt-10">
                Tên giảng viên
              </div>
            </div>
            <div className="flex flex-col items-start px-3.5 pt-9 pb-16 mt-3.5 w-full bg-blue-300 bg-blend-normal max-md:mr-1.5 max-md:max-w-full">
              <div className="self-stretch mt-7 ml-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <ContentCard {...contentCards[0]} />
                    </div>
                  ))}
                </div>
              </div>
              
              
              
              <div className="mt-12 ml-9 text-3xl text-black max-md:mt-10 max-md:ml-2.5">
                Exercise 02221
              </div>
              <div className="mt-5 max-w-full w-[662px]">
                <div className="flex gap-5 max-md:flex-col">
                  {[1, 2].map((index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-start px-4 pt-4 pb-7 mx-auto w-full text-2xl font-medium bg-white rounded-3xl shadow-[0px_19px_47px_rgba(47,50,125,0.1)] max-md:mt-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/814d904cbf8b0127bfeb9ed592c731c9807ae1a3045dc990c88bf615d23d7f3a?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                          alt="Exercise content"
                          className="object-contain self-stretch w-full rounded-3xl aspect-[1.34]"
                        />
                        <div className="flex gap-4 mt-7 text-xl tracking-wide leading-relaxed text-gray-500 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6728ec04b75fa482841b1a3f4151acb1d91bbe0cc702cb95508c754e82f8faa0?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                            alt=""
                            className="object-contain shrink-0 w-8 aspect-square"
                          />
                          <div className="self-start">Download</div>
                        </div>
                        <div className="flex gap-10 mt-8 text-center text-slate-800">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae1654e2f24f8136fc4c69d4e7a3a4d5469b4393027a6fc217e3cfb111e63185?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                            alt=""
                            className="object-contain shrink-0 self-start rounded-sm aspect-[0.9] w-[27px]"
                          />
                          <div>Chủ đề excercise</div>
                        </div>
                        <button className="px-5 py-7 mt-14 font-bold tracking-wide text-center text-white bg-teal-400 rounded-2xl max-md:mt-10">
                          Upload file đáp án
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start self-center px-16 py-11 w-full rounded-2xl bg-amber-500 bg-opacity-30 max-w-[1309px] mt-[603px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-start text-2xl font-semibold text-gray-800">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9ea5ff8acb870bc15124dbf3d8387276b0a3f0a3038676f7c3443133bb248b?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                    alt="Instructor avatar"
                    className="object-contain shrink-0 rounded-none aspect-square w-[71px]"
                  />
                  <div className="flex flex-col">
                    <div>Tên giảng viên</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4383e6ed47c9477218aeb2c12171c4dfbad7c41203b36d6c7861839591e0be2b?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                      alt="Rating"
                      className="object-contain mt-2 max-w-full aspect-[5.92] w-[130px]"
                    />
                  </div>
                </div>
                <div className="mt-9 text-lg tracking-wide text-gray-500">
                  Nhận xét của giảng viên
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}