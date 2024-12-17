import React from 'react';

// Function to convert letter grade to GPA point

const GradeTable = () => {
  const grades = [
    {
      courseName: "Mathematics",
      assignment: 9,
      quiz: 8,
      midterm: 7,
      finalExam: 6,
      credit: 3
    },
    {
      courseName: "Physics",
      assignment: 9,
      quiz: 8,
      midterm: 7,
      finalExam: 7,
      credit: 4
    },
    {
      courseName: "Chemistry",
      assignment: 9,
      quiz: 8,
      midterm: 7,
      finalExam: 7,
      credit: 3
    }
  ];

  return (
    <div className="grades-table bg-white rounded-[24px] w-full p-[50px_10px_50px_30px] mt-[51px]">
      <div className="table-header flex text-center text-black font-semibold text-[22px]">
        <div className="table-header-cell bg-[#F48C06] opacity-100 px-2 py-3 flex-1 text-black">CourseName</div>
        <div className="table-header-cell bg-[#9DCCFF] px-2 py-3 flex-1 text-black">ASSIGNMENT</div>
        <div className="table-header-cell bg-[#FCDDB5] px-2 py-3 flex-1 text-black">QUIZZ</div>
        <div className="table-header-cell bg-[#D2E8FF] px-2 py-3 flex-1 text-black">MID EXAM</div>
        <div className="table-header-cell bg-[#FCDDB5] px-2 py-3 flex-1 text-black">FINAL EXAM</div>
        <div className="table-header-cell bg-[#D2E8FF] px-2 py-3 flex-1 text-black">CREDIT</div>
        <div className="table-header-cell bg-[#D2E8FF] px-2 py-3 flex-1 text-black">TOTAL POINT</div>
      </div>

      {/* Rows */}
      <div className="table-rows">
        {grades.map((grade, index) => {
          const assignmentPoint = grade.assignment;
          const quizPoint = grade.quiz;
          const midtermPoint = grade.midterm;
          const finalExamPoint = grade.finalExam;
          
          // Calculate total points
          const totalPoints = (assignmentPoint + quizPoint + midtermPoint + finalExamPoint) /4;

          return (
            <div key={index} className="flex text-center">
              <div className="table-cell border-b opacity-100 px-2 py-3 flex-1 text-black">{grade.courseName}</div>
              <div className="table-cell border-b px-2 py-3 flex-1 text-black">{grade.assignment}</div>
              <div className="table-cell border-b px-2 py-3 flex-1 text-black">{grade.quiz}</div>
              <div className="table-cell border-b px-2 py-3 flex-1 text-black">{grade.midterm}</div>
              <div className="table-cell border-b px-2 py-3 flex-1 text-black">{grade.finalExam}</div>
              <div className="table-cell border-b px-2 py-3 flex-1 text-black">{grade.credit}</div>
              <div className="table-cell border-b px-2 py-3 flex-1 text-black">{totalPoints.toFixed(2)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GradeTable;
