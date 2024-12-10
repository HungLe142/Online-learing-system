import * as React from "react";
import CourseGrid from "../components/CourseGrid";

function CoursePage() {
  return (
    <div className="flex overflow-hidden flex-col pt-2 bg-white">
      <div className="self-center px-16 py-14 mt-12 ml-12 max-w-full text-3xl font-medium tracking-wide text-black bg-blue-50 rounded-3xl w-[1069px] text-center">
        Get choice of your course
      </div>
      <CourseGrid />
    </div>
  );
}

export default CoursePage;