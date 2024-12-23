import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";

export const getClasses = async (studentId) => {
    const serverUrl = APIEndPoint.SERVER_URL;
    try {
    console.log(`${serverUrl}/student/${studentId}/classes`)
    const response = await axios.get(`${serverUrl}/student/${studentId}/classes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching classes:', error);
    throw error;
  }
};
