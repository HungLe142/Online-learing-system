import * as React from "react";

function CourseCard({ imageUrl, title, instructorImage, instructorName, currentLesson, totalLessons }) {
  return (
    <div className="flex flex-col px-5 py-6 mx-auto w-full bg-white rounded-3xl shadow-[0px_19px_47px_rgba(47,50,125,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`Course thumbnail for ${title}`}
        className="object-contain w-full rounded-3xl aspect-[1.89] max-md:max-w-full"
      />
      <div className="self-start mt-3 text-2xl font-medium leading-relaxed text-slate-800 max-md:ml-1">
        {title}
      </div>
      <div className="flex gap-4 self-start mt-9 text-lg font-medium tracking-wide text-black max-md:ml-1">
        <img
          loading="lazy"
          src={instructorImage}
          alt={`Profile picture of ${instructorName}`}
          className="object-contain shrink-0 aspect-square rounded-[60px] w-[42px]"
        />
        <div className="self-start basis-auto">{instructorName}</div>
      </div>
      <div className="flex flex-col items-start mt-6 rounded-sm bg-zinc-300 max-md:pr-5 max-md:max-w-full">
        <div className="flex shrink-0 max-w-full h-2 bg-teal-400 rounded-sm w-[372px]" />
      </div>
      <div className="self-end mt-3 text-sm font-semibold tracking-wide text-black text-opacity-50 max-md:mr-1.5">
        Lesson {currentLesson} of {totalLessons}
      </div>
    </div>
  );
}

export default CourseCard;