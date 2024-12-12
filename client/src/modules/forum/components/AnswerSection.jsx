import React from 'react';

export default function AnswerSection({ answers }) {
  return (
    <>
      {answers.map(answer => (
        <div key={answer.id} className="px-7 pt-5 pb-28 mt-11 ml-6 text-lg tracking-wide text-gray-500 bg-blue-300 bg-blend-normal max-md:px-5 max-md:pb-28 max-md:mt-10 max-md:max-w-full">
          {answer.content}
        </div>
      ))}
      
      <div className="flex flex-col self-end px-8 pt-5 pb-11 mt-8 w-full text-3xl leading-none text-gray-800 bg-red-400 bg-blend-normal max-w-[1376px] max-md:pr-5 max-md:mr-1 max-md:max-w-full">
        <div className="self-end max-md:mr-2.5">Thêm câu trả lời</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94684036b6c641990565f0fafac5dcbf9d0e59e85d0dcfd0d7de373db7b0fe2?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
          className="object-contain mt-5 w-full aspect-[11.9] max-md:max-w-full"
          alt=""
        />
      </div>
      
      <button className="z-10 self-center px-14 py-3.5 mt-0 ml-40 max-w-full text-2xl font-medium text-white whitespace-nowrap bg-teal-400 rounded-[60px] w-[189px] max-md:px-5">
        Submit
      </button>
    </>
  );
}