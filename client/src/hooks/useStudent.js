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

