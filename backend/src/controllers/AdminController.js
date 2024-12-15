import { addLecturer, addStudent } from '../models/AdminModel.js'; // Đảm bảo gọi đúng hàm từ model

// Controller thêm giảng viên
export async function AddLecturer(req, res) {
    try {
        const result = await addLecturer(req.body);
        // Nếu có statusMessage, trả về thông báo
        if (result) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Thêm thành công" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}

export async function AddStudent(req, res) {
    try {
        const result = await addStudent(req.body);
        // Nếu có statusMessage, trả về thông báo
        if (result) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Thêm thành công" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}