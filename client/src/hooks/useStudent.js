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

export const modifyInfo = async (user, token) => {
    const serverUrl = `${APIEndPoint.SERVER_URL}/user/info/${user.user_id}`;

    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Gắn token vào header cho authorization
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error(`Lỗi: ${response.status} - ${response.statusText}`);
        }

        const updatedUserInfo = await response.json();
        return updatedUserInfo;
    } catch (err) {
        console.error('Lỗi khi gửi yêu cầu:', err);
        throw err;
    }
};
