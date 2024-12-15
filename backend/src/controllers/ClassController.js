import { classResources, getScore, updateScore,forum } from '../models/ClassModel.js';

export async function ClassResources(req, res) {
    try {
        console.log(req.query);
        const result = await classResources(req.query);
        // Nếu có statusMessage, trả về thông báo
        if (result != 1) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Trả về thất bại" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}

export async function UpdateScore(req, res) {
    try {
        console.log(req.body);
        const result = await updateScore(req.body);
        // Nếu có statusMessage, trả về thông báo
        if (result != 1) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Trả về thất bại" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}

export async function GetScore(req, res) {
    try {
        const result = await getScore(req.query);
        // Nếu có statusMessage, trả về thông báo
        if (result != 1) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Trả về thất bại" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}

export async function Forum(req, res) {
    try {
        const result = await forum(req.query);
        // Nếu có statusMessage, trả về thông báo
        if (result != 1) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Trả về thất bại" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}