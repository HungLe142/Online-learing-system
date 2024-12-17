import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";

export const getClasses = async (studentId, token) => {
    let semesterId = 'HK241';
    const serverUrl = APIEndPoint.SERVER_URL;
    try {
        const url = `${serverUrl}/student/GetStudentClassInfo?studentID=${studentId}&semesterID=${semesterId}`;
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
