import * as React from "react";
import { InputField } from "./InputField";
import { PersonalInfo } from "./PersonalInfo";

function UserProfile() {
  const [userInfo, setUserInfo] = React.useState({
    name: "Adobe XD Auto - Animate : Your Guide to Creating",
    location: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
    email: "jessica.hansome@example.com",
    birthDate: "September 24, 2017",
    phoneNumber: "0123456789"
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User info submitted:", userInfo);
    // Process form submission here (e.g., send data to an API)
  };

  return (
    <form 
      className="flex flex-col text-lg font-semibold rounded-none text-zinc-600"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col px-9 pt-20 pb-36 w-full bg-white rounded-3xl max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <InputField 
          label="Name"
          value={userInfo.name}
          id="name"
          onChange={handleInputChange}
        />
        
        <PersonalInfo 
          birthDate={userInfo.birthDate}
          phoneNumber={userInfo.phoneNumber}
          onChange={handleInputChange}
        />

        <InputField 
          label="Location"
          value={userInfo.location}
          id="location"
          onChange={handleInputChange}
        />

        <InputField 
          label="Email"
          value={userInfo.email}
          id="email"
          type="email"
          centerAligned
          onChange={handleInputChange}
        />

        <button 
          type="submit" 
          className="mt-6 px-6 py-2 rounded-lg bg-blue-500 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default UserProfile;
