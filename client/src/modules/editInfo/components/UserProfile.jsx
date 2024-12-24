import * as React from "react";
import { useEffect, useState } from 'react';
import { InputField } from "./InputField";
import { PersonalInfo } from "./PersonalInfo";
import { change_user_info, Get_user_info, createUserObject, mm_dd_to_yy_mm } from "../services/data_ope";

import { useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';

function UserProfile() {

/********************* Fix here !***************************/
  const {user, token} = useAuth();
  const  userId = user.user_id;
  
/********************* Fix here !***************************/

  const [userInfo, setUserInfo] = useState({
    name: '',
    location: '',
    email: '',
    birthDate: '',
    phoneNumber: ''
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await Get_user_info(token);
        setUserInfo({
          name: data.name,
          location: data.location,
          email: data.email,
          //birthDate: new Date(data.birthDate).toLocaleDateString(),
          birthDate: data.birthDate,
          phoneNumber: data.phoneNumber
        });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [userId, token]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here (e.g., send data to an API)\
    const user = createUserObject(userId, userInfo);
    let data = change_user_info(user, token);
    console.log("Updated data: ", data)
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
