import React from 'react';

const Header = () => {
  return (
    <div className="header-section flex flex-col w-full">
      <div className="top-header flex w-full gap-[40px] md:gap-[50px] text-[#252643] flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2827585117db5240019bac32cf26e9b57fa087d4bea4a12b923e295187fe68?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          className="logo w-12 aspect-ratio object-contain object-center"
          alt="School logo"
        />
        <div className="header-info bg-white flex flex-wrap gap-[40px_100px] p-[11px_32px_34px] rounded-2xl mt-10">
          <div className="gpa-info flex flex-col self-end mt-6">
            <div className="gpa-value font-semibold text-[30px]">GPA: 4.0</div>
            <div className="credit-value font-normal text-[18px] mt-3">60 credit</div>
          </div>
          <div className="year-info flex flex-col self-start text-[#252643] mt-2 ml-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e62892f1191f504051eefcb380643b03678ec62a6ddc7a1bb8a6fd84e35a405?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
              className="calendar-icon w-[48px] aspect-ratio object-contain object-center"
              alt="Calendar icon"
            />
            <div className="academic-year mt-[10px]">2023-2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
