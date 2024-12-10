import React from 'react';

const GradeTable = () => {
  return (
    <div className="grades-table bg-white rounded-[24px] w-full p-[50px_10px_50px_30px] mt-[51px]">
      <div className="table-header flex text-center text-black font-semibold text-[22px] flex-wrap">
        <div className="course-name-header bg-[#F48C06] opacity-30 px-2 py-3">CourseName</div>
        <div className="assignment-header bg-[#9DCCFF] p-[22px_9px]">ASSIGNMENT</div>
        <div className="quiz-header bg-[#FCDDB5] p-[21px_49px]">QUIZZ</div>
        <div className="midterm-header bg-[#D2E8FF] p-[17px_21px_27px]">MID EXAM</div>
        <div className="final-header bg-[#FCDDB5] p-[17px_17px_27px]">FINAL EXAM</div>
        <div className="credit-header bg-[#D2E8FF] p-[22px_38px]">CREDIT</div>
      </div>
    </div>
  );
};

export default GradeTable;