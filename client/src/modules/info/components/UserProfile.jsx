import * as React from "react";
import { InputField } from "./InputField";
import { PersonalInfo } from "./PersonalInfo";
import get_user_info from "../services/info_data_process";

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';



function UserProfile() {
/********************* Fix here !***************************/
// const {user, token} = useAuth();
// const  user_id = user.user_id;
  let user_id = 'SV001';
  let token = 'your_token_here';
/********************* Fix here !***************************/

  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const info = await get_user_info(user_id, token);
        setPersonalInfo(info);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [user_id, token]);

  if (!personalInfo) {
    return <div>Loading...</div>; // Hiển thị trạng thái loading khi dữ liệu chưa được trả về
  }

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
        />
      </div>
    </form>
  );
}

export default UserProfile;
