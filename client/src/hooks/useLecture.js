import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";

export const postMaterial = async (token, doc_name, doc_link, class_id) => {
    const serverUrl = APIEndPoint.SERVER_URL;
    try {
        const url = `${serverUrl}/lecturer/push_doc?lop_id=${class_id}&ten_tai_lieu=${doc_name}&url=${doc_link}`;
        const response = await axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error posting material:', error);
        throw error;
    }
};

export const deleteMaterial = async (token, doc_name, class_id) => {
    const serverUrl = APIEndPoint.SERVER_URL;
    try {
        const url = `${serverUrl}/lecturer/remove_doc?lop_id=${class_id}&ten_tai_lieu=${doc_name}`;
        const response = await axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error removing material:', error);
        throw error;
    }
};

