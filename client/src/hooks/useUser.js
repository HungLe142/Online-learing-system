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
      console.error('Error fetching classes st:', error);
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
      console.error('Error fetching classes lt:', error);
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

export const getClasses = async (user_id, token) => {
    let semesterId = SEMESTER;
    const serverUrl = APIEndPoint.SERVER_URL;

    try {
        let url = null;
        
        if (user_id.startsWith('SV')) {
            url = `${serverUrl}/student/courses?hoc_ky=${semesterId}`;
        } else if (user_id.startsWith('GV')) {
            url = `${serverUrl}/lecturer/courses?hoc_ky=${semesterId}`;
        }

        if (!url) {
            throw new Error('Invalid user_id');
        }

        console.log(url);

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
};

export const getClassMaterials = async (token, class_id) => {
  const serverUrl = APIEndPoint.SERVER_URL;
  try {
      const url = `${serverUrl}/class/classResources?lop_id=${class_id}`;
      //console.log(url);
      const response = await axios.get(url, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      return response.data;
  } catch (error) {
      console.error('Error fetching material:', error);
      throw error;
  }
};