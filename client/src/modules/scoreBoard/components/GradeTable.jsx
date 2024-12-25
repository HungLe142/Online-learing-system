import React, { useState, useEffect } from 'react';
import getCourseData from '../services/coreBoardServices';
import { useAuth } from "../../../hooks/useAuth";

const GradeTable = () => {
  const { user, token } = useAuth();
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourseData(user.id, token); // Assuming `user.id` is the `studentId`
        setGrades(data);
        console.log("Data of scores: ", grades)
      } catch (error) {
        console.error('Failed to fetch course data:', error);
      }
    };

    fetchData();
  }, [user.id, token]);

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
          // Need change, totalPoints can be calculated by functions or Procedures in sql
          const totalPoints = (assignmentPoint + quizPoint + midtermPoint + finalExamPoint) / 4;

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
