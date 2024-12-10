import React from 'react';

const SemesterInfo = () => {
  return (
    <div className="semester-section bg-white p-[40px_30px_79px] rounded-[15px] mt-[40px]">
      <div className="semester-title text-[#252643] font-semibold text-[30px]">Niên khóa</div>
      <div className="semester-card bg-white p-[12px_30px] mt-[30px] border-[1px] border-[#49BDBD4D] rounded-[19px]">
        <div className="semester-gpa text-[#252643] font-medium text-[18px]">GPA: 4.0</div>
        <div className="semester-year flex gap-2 mt-[13px] text-[14px] font-medium text-[#252643D0]">
          <div className="year-icon"></div>
          <div className="year-text">2023-2024</div>
        </div>
      </div>
    </div>
  );
};

export default SemesterInfo;