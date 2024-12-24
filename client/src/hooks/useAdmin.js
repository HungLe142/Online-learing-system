import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";
// Doing...
export const createClass = async (data, token) => {
    /* 
        const data = {
        semesterID: '20231',
        courseID: 'CS101',
        lecturerID: 'GV123',
        classTimetable: JSON.stringify([
            { thu: 2, tiet_bat_dau: 1, tiet_ket_thuc: 3, phong_hoc: 'A101' },
            { thu: 4, tiet_bat_dau: 2, tiet_ket_thuc: 4, phong_hoc: 'B202' }
        ])
    };
    */
    
    try {
        const response = await fetch('/api/addClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.success) {
            console.log(result.message);
        } else {
            console.error(result.message);
        }
    } catch (err) {
        console.error('Request failed', err);
    }
};
