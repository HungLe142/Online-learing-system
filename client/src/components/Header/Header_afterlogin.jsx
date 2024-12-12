// import React, { useState } from "react";
// import { Link, useMatch } from "react-router-dom";
// import ico_printer from "../../assets/icons/icon_printer_black.png";
// import icon_bell from "../../assets/icons/icon_bell.png";
// import icon_money from "../../assets/icons/icon_money.png";
// import icon_people from "../../assets/icons/icon_people.png";
// import UserPanel from "../userPanel/UserPanel";
// import MoneyPanel from "../moneyPanel/moneyPanel";

// function HeaderAuthed() {
//   const [isUserPanelVisible, setUserPanelVisible] = useState(false);
//   const [isMoneyPanelVisible, setMoneyPanelVisible] = useState(false);

//   const toggleUserPanel = () => {
//     setUserPanelVisible((prev) => !prev);
//     setMoneyPanelVisible(false);
//   };

//   const toggleMoneyPanel = () => {
//     setMoneyPanelVisible((prev) => !prev);
//     setUserPanelVisible(false);
//   };

//   // Tạo danh sách các liên kết
//   const options = [
//     { to: "/about", label: "Giới thiệu", activeOptions: { exact: true } },
//     { to: "/my-documents", label: "Tài liệu của tôi" },
//     { to: "/user/purchase-paper", label: "Mua credit" },
//     { to: "/user/view-printer-status", label: "Tình trạng máy in" },
//   ];

//   return (
//     <>
//       <header className="bg-white text-black p-4 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <Link to="/user/home" className="flex items-center space-x-2">
//             <img
//               src={ico_printer}
//               alt="WePress Logo"
//               className="tablet:h-4 h-10 w-10"
//             />
//             <span className="font-bold text-xl">WePress</span>
//           </Link>

//           {/* Render các link với active class */}
//           <div className="flex space-x-4">
//             {options.map((option) => {
//               const match = useMatch({
//                 path: option.to,
//                 ...option.activeOptions,
//               });
//               return (
//                 <Link
//                   to={option.to}
//                   key={option.to}
//                   className={`
//                     text-lg p-2 
//                     transition-all duration-500 
//                     hover:text-black
//                     hover:bg-gray-100 
//                     rounded-md 
//                     ${match ? "font-bold text-black-600 bg-gray-100" : ""}
//                   `}
//                 >
//                   {option.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex items-center space-x-2 w-[200px]">
//           <button className="thong-bao mr-[10px]">
//             <img src={icon_bell} alt="icon_bell" className="h-8 w-8 " />
//           </button>

//           <button
//             onClick={toggleMoneyPanel}
//             className="w-[150px] flex justify-center items-center space-x-2"
//           >
//             <img
//               src={icon_money}
//               alt="icon_money"
//               className="h-8 w-8 filter invert"
//             />
//             <span className="text-xl">50</span>
//           </button>

//           <button onClick={toggleUserPanel}>
//             <img
//               src={icon_people}
//               alt="icon_people"
//               className="h-8 w-8 filter"
//             />
//           </button>
//         </div>
//       </header>

//       {/* Hiển thị UserPanel nếu isUserPanelVisible = true */}
//       {isUserPanelVisible && (
//         <div>
//           <UserPanel />
//         </div>
//       )}

//       {/* Hiển thị MoneyPanel nếu isMoneyPanelVisible = true */}
//       {isMoneyPanelVisible && (
//         <div>
//           <MoneyPanel />
//         </div>
//       )}
//     </>
//   );
// }

// export default HeaderAuthed;

import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endPoints";
import UserPanel from "../userPanel/UserPanel";
function HeaderAuthed() {
  const [isUserPanelVisible, setUserPanelVisible] = useState(false);
  const toggleUserPanel = () => {
    setUserPanelVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full h-[50px]">
      <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36fd44271884a62197205b2a0de8226b4a4692764bc4c785057397d3512aeae8?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
          alt="Company logo"
          className="object-contain shrink-0 aspect-[1.82] h-10"
        />
        <div className="flex flex-wrap gap-10 my-auto max-md:max-w-full">
          <nav className="flex flex-auto gap-10 my-auto text-2xl tracking-wide text-zinc-600 max-md:max-w-full">
            <Link to={ENDPOINTS.USER.HOME} className="hover:text-zinc-800">Home</Link>
            <Link to={ENDPOINTS.USER.INFO} className="basis-auto hover:text-zinc-800">Information</Link>
            <Link to={ENDPOINTS.USER.TIMETABLE} className="basis-auto hover:text-zinc-800">Timetable</Link>
            <Link to={ENDPOINTS.USER.REGISTER_COURSE} className="basis-auto hover:text-zinc-800">Register course</Link>
          </nav>
          <button onClick={toggleUserPanel} className="flex gap-3 items-center text-lg tracking-wide text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/399eba49b1ba2cf735a577f943ecafa5060c3db4176ee5d59aa1192e4dcb86e3?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
              alt="User profile picture"
              className="object-contain shrink-0 self-stretch aspect-square rounded-[60px] w-[50px]"
            />
          </button>
        </div>
      </div>
      
      {/* Show UserPanel if isUserPanelVisible is true */}
      {isUserPanelVisible && (
        <div className="absolute top-0 right-0 mt-12 mr-1 w-60 p-4">
          <UserPanel /> {/* Display the UserPanel here */}
        </div>
      )}
    </div>
  );
}

export default HeaderAuthed;