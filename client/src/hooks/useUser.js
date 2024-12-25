import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";
import {SEMESTER} from "../constants/constants"

export const getTimeTable = async (studentId, lecturerId, token) => {
  let semesterId = SEMESTER;
  const serverUrl = APIEndPoint.SERVER_URL;

  if (lecturerId == null && studentId != null) {
    // get stu's table
    try {
      const url = `${serverUrl}/student/timetable?hoc_ky=${semesterId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
      }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw error;
    }
  } else if (studentId == null && lecturerId != null) {
    // get lec's table
    try {
      const url = `${serverUrl}/lecturer/timetable?hoc_ky=${semesterId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
      }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw error;
    }
  } else {
    throw new Error('Either studentId or lecturerId must be provided');
  }
};

export const getInfo = async (token) => {
  const serverUrl = APIEndPoint.SERVER_URL; // 'http://localhost:3001'
  try {
      const url = `${serverUrl}/user/info`;
      console.log(url);
      const response = await axios.get(url, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      return response.data;
  } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
  }
};

