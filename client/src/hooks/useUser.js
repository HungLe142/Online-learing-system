import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";

export const getTimeTable = async (studentId, lecturerId) => {
  const serverUrl = APIEndPoint.SERVER_URL;

  if (lecturerId == null && studentId != null) {
    try {
      const response = await axios.get(`${serverUrl}/student/courses`, {
        params: {
          studentID: studentId,
          semesterID: 'HK241',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw error;
    }
  } else if (studentId == null && lecturerId != null) {
    try {
      const response = await axios.get(`${serverUrl}/lecturer/courses`, {
        params: {
          lecturerID: lecturerId,
          semesterID: 'HK241',
        },
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

export const getInfo = async (user_id, token) => {
  const serverUrl = APIEndPoint.SERVER_URL; // 'http://localhost:3001'
  try {
      const url = `${serverUrl}/user/info/${user_id}`;
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

