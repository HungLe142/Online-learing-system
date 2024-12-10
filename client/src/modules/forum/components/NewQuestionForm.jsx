import React from 'react';

export default function NewQuestionForm() {
  return (
    <div className="flex flex-col self-center mt-64 w-full max-w-[1425px] max-md:mt-10 max-md:max-w-full">
      <form className="flex flex-col px-16 pt-8 pb-20 text-2xl text-black bg-blue-300 rounded-3xl bg-blend-normal max-md:px-5 max-md:max-w-full">
        <h2 className="self-start text-slate-800">ADD NEW QUESTION</h2>
        
        <div className="mt-10 ml-10 tracking-wide leading-10 max-md:ml-2.5">
          <label htmlFor="questionTitle" className="sr-only">Tiêu đề câu hỏi</label>
          <input
            type="text"
            id="questionTitle"
            className="w-full border-b border-zinc-600 bg-transparent"
            placeholder="Tiêu đề câu hỏi"
          />
        </div>

        <div className="mt-7 ml-10 tracking-wide leading-10 max-md:ml-2.5">
          <label htmlFor="questionContent" className="sr-only">Nội dung câu hỏi</label>
          <textarea
            id="questionContent"
            className="w-full h-[200px] border-b border-zinc-600 bg-transparent"
            placeholder="Nội dung câu hỏi"
          />
        </div>
      </form>
      
      <button className="z-10 self-end px-12 py-3.5 mt-0 mr-10 text-2xl font-medium text-white whitespace-nowrap bg-teal-400 rounded-[60px] max-md:px-5 max-md:mr-2.5">
        Submit
      </button>
    </div>
  );
}