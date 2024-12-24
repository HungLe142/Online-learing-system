import React from "react";

const LoginForm = ({ userMail, password, setuserMail, setPassword, handleLogin, isLoggingIn, loginError }) => {
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="userMail" className="block text-sm font-medium text-gray-700">userMail</label>
        <input
          id="userMail"
          name="userMail"
          type="userMail"
          value={userMail}
          onChange={(e) => setuserMail(e.target.value)}
          placeholder="Nhập userMail của bạn"
          required
          autoComplete="userMail"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu của bạn"
          required
          autoComplete="current-password"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={isLoggingIn}
        className="flex items-center justify-center w-full px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Đăng nhập
        <i className="fas fa-arrow-right ml-2"></i>
      </button>
      {loginError && <p className="text-red-500 text-sm mt-2">{loginError.message}</p>}
    </form>
  );
};

export default LoginForm;