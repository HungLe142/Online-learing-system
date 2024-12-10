import React from 'react';
import QuestionCard from '../components/QuestionCard';
import NewQuestionForm from '../components/NewQuestionForm';

const questions = [
  {
    id: 1,
    title: "Tiêu đề câu hỏi",
    student: "Tên sinh viên hỏi - MSSV",
    content: "Nội dung câu hỏi",
    answers: [
      { id: 1, content: "Câu trả lời- Tên người trả lời 1" },
      { id: 2, content: "Câu trả lời- Tên người trả lời 2" }
    ]
  },
  {
    id: 2,
    title: "Tiêu đề câu hỏi",
    student: "Tên sinh viên hỏi - MSSV", 
    content: "Nội dung câu hỏi",
    answers: [
      { id: 1, content: "Câu trả lời- Tên người trả lời 1" },
      { id: 2, content: "Câu trả lời- Tên người trả lời 2" }
    ]
  }
];

export default function ForumLayout() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <header className="flex flex-wrap gap-5 justify-between items-start px-6 pt-6 pb-14 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center px-2.5 py-7 bg-teal-400">
          <div className="shrink-0 h-px border border-white border-solid" />
        </div>
        <h1 className="mt-5 text-5xl text-center text-white max-md:max-w-full">
          Tên diễn đàn
        </h1>
      </header>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/def5f7ef65b910eec5eca82f218b9dab9a4e8e5a499c630cd88329c2a99a19cb?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
        className="object-contain z-10 w-full aspect-[5.88] max-md:max-w-full"
        alt=""
      />

      <main className="flex flex-col px-16 py-16 w-full bg-blue-300 bg-blend-normal max-md:px-5 max-md:max-w-full">
        {questions.map(question => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </main>

      <NewQuestionForm />
    </div>
  );
}