import { getAllCourse } from '../models/StuModel.js';

export async function GetAllCourse(req, res) {
    try {
        const result = await getAllCourse(req.query);
        // Nếu có statusMessage, trả về thông báo
        if (result != 1) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Trả về thất bại" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}