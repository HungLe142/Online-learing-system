import React, { useEffect, useRef, useState } from "react";
import icon_logout from "../../assets/icons/icon_logout.png";
import { useNavigate, Link } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endPoints";
import { useAuth } from "../../hooks/useAuth";
const UserPanel = () => {
  const { logout, isAuthenticated } = useAuth(); // Sử dụng hàm logout và trạng thái xác thực từ useAuth
  const navigate = useNavigate();


  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate(ENDPOINTS.AUTH.LOGIN, { replace: true }); // Điều hướng về trang login nếu chưa xác thực
  //   }
  // }, [isAuthenticated, navigate]);


  return (
    <div className="absolute right-0  text-black w-[200px] h-[220px] z-100">
        {/* Nút Đăng Xuất với xử lý logout */}
        <button
          className="bg-white p-2 rounded-lg hover:bg-red-300 hover:border-red-400 w-full text-left flex justify-center items-center space-x-2 border-2 border-gray-200"
          onClick={() => {
            logout();
            navigate(ENDPOINTS.AUTH.LOGIN, { replace: true }); // Điều hướng về trang login nếu chưa xác thực
          }}
        >
          <span>Đăng xuất</span>
          <img
            src={icon_logout}
            alt="icon_logout"
            className="h-8 w-8 filter invert"
          />
        </button>
    </div>
  );
};

export default UserPanel;
