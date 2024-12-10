import React from 'react';
import AnswerSection from './AnswerSection';

export default function QuestionCard({ title, student, content, answers }) {
  return (
    <div className="flex flex-col px-6 pt-2.5 pb-7 w-full bg-white rounded-3xl mb-14 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between mr-7 w-full max-w-[1696px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col text-3xl leading-none text-gray-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49a1f60f3f654f9cf0c6bb355c31a5db20d41ebcf0e5e088a829fc335709a04b?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
            className="object-contain w-8 aspect-square"
            alt=""
          />
          <div className="self-center text-center">{title}</div>
          <div className="mt-7 max-md:ml-1.5">{student}</div>
        </div>
        <div className="self-start mt-6 text-5xl font-black leading-none text-teal-400 max-md:text-4xl" />
      </div>
      
      <div className="px-7 pt-8 pb-28 mt-24 ml-6 text-lg tracking-wide text-gray-500 bg-blue-300 bg-blend-normal max-md:px-5 max-md:pb-28 max-md:mt-10 max-md:max-w-full">
        {content}
      </div>

      <AnswerSection answers={answers} />
    </div>
  );
}