// Login.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import LoginForm from "../components/form";
import request from "../../../utils/request";

const Login = () => {
  const { login, isLoggingIn, loginError, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };


  useEffect(() => {
    // Kiểm tra nếu người dùng đã xác thực trước khi thực hiện fetch và logic điều hướng
    if (!isAuthenticated) return; // Nếu chưa đăng nhập, không làm gì cả
    navigate(ENDPOINTS.USER.HOME);
    // const fetchUserProfile = async () => {
    //   const response = await request.get("/auth/me");
    //   console.log(response.role);
    //   let role = "user"; // Đặt giá trị mặc định cho role

    //   // Kiểm tra nếu role của người dùng là "spso"
    //   if (["spso"].includes(response.role)) {
    //     role = "spso";
    //   }

    //   // Điều hướng sau khi xác định vai trò người dùng
    //   if (role === "user") {
    //     navigate(ENDPOINTS.USER.HOME); // Chuyển hướng đến trang chủ của người dùng
    //   } else if (role === "spso") {
    //     navigate(ENDPOINTS.ADMIN.DASHBOARD); // Chuyển hướng đến trang dashboard của admin
    //   }
    // };

    // // Gọi hàm fetchUserProfile để lấy thông tin người dùng và điều hướng
    // fetchUserProfile();
  }, [isAuthenticated, navigate]);

  return (
    <div className="overflow-hidden px-16 py-10 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow items-start px-16 pb-14 text-white min-h-[825px] pt-[671px] rounded-[29px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe30ddb84674c3e8de09054c6ac765b46cf127310fce59aaa7521ca5718a3e5a?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
              alt="Login page decorative background"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative text-4xl font-bold max-md:max-w-full">
              Lorem Ipsum is simply
            </div>
            <div className="relative mt-1.5 text-2xl">
              Lorem Ipsum is simply
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-semibold">Welearning</h2>
        </div>

        {/* Sử dụng LoginForm */}
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          isLoggingIn={isLoggingIn}
          loginError={loginError}
        />

        <div className="mt-4 text-center">
          <Link to={ENDPOINTS.AUTH.FORGOT_PASSWORD} className="text-sm text-blue-500 hover:underline">
            Quên mật khẩu
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
