import React from 'react';
import Header from '../components/Header';
import GradeTable from '../components/GradeTable';
import SemesterInfo from '../components/SemesterInfo';
import Chart from '../components/Chart';

const ScoreBoard = () => {
  return (
    <div className="student-grades bg-[#9DCCFF] max-w-[1705px] w-full">
      <div className="grades-container flex gap-5">
        <div className="main-content flex flex-col w-[70%]">
          <Header />
          <GradeTable />
        </div>
        <div className="sidebar flex flex-col w-[30%] ml-[20px]">
          <SemesterInfo />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;