import React from "react";
import icon_login from "../../assets/icons/icon_login.png";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endPoints";
function HeaderunAuth({ isLoginRequired, onLoginClick }){
  return (
    <header className="bg-white text-black p-4 flex justify-between items-center h-[50px]">
      <div className="flex items-center space-x-4">
        <Link to={ENDPOINTS.INDEX} className="flex items-center space-x-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36fd44271884a62197205b2a0de8226b4a4692764bc4c785057397d3512aeae8?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
          alt="Company logo"
          className="object-contain shrink-0 aspect-[1.82] w-10"
        />
          <span className="font-bold text-xl">Welearning</span>
        </Link>
      </div>
      
      {isLoginRequired ? (
        <div className="bg-orange-500 text-white rounded-[50px] flex items-center w-[480px] h-[50px]">
          <span className="ml-4">Để sử dụng tính năng này, bạn vui lòng</span>
          <button
            className="login-button ml-2 flex items-center space-x-2"
            onClick={onLoginClick} // Trigger login handler
          >
            <div className="bg-white text-black rounded-[50px] flex items-center w-[150px] h-[35px] m-2">
              <Link to={ENDPOINTS.AUTH.LOGIN} className="ml-4">Đăng nhập</Link>
              <i className="fas fa-sign-in-alt"></i>
              <img src={icon_login} alt="icon_login" className="h-5 w-5 ml-3" />
            </div>
              
          </button>
        </div>
      ) : (
        <button
          onClick={onLoginClick} // Call the handler from props
          className=" login-button flex items-center space-x-2"
        >
          <Link to={ENDPOINTS.AUTH.LOGIN} className="ml-4">Đăng nhập</Link>
          <i className="fas fa-sign-in-alt"></i>
          <img src={icon_login} alt="icon_login" className="h-5 w-5" />
        </button>
      )}
    </header>
  );
}

export default HeaderunAuth;
