import * as React from "react";
import { InputField } from "./InputField";
import { PersonalInfo } from "./PersonalInfo";

function UserProfile() {
  const personalInfo = {
    name: "Nguyễn Văn A",
    birthDate: "September 24, 2017",
    phoneNumber: "0123456789",
    location: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
    email: "jessica.hansome@example.com"
  };

  return (
    <form className="flex flex-col text-lg font-semibold rounded-none text-zinc-600 ">
      <div className="flex flex-col px-9 pt-20 pb-36 w-full bg-white rounded-3xl max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <InputField 
          label="Name"
          value={personalInfo.name}
          id="name"
        />
        
        <PersonalInfo 
          birthDate={personalInfo.birthDate}
          phoneNumber={personalInfo.phoneNumber}
        />

        <InputField 
          label="Location"
          value={personalInfo.location}
          id="location"
        />

        <InputField 
          label="Email"
          value={personalInfo.email}
          id="email"
          type="email"
          centerAligned
        />
      </div>
    </form>
  );
}

export default UserProfile;