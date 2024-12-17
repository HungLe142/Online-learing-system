import { addLecturer, addStudent, adminLogin, addClass } from '../models/AdminModel.js'; // Đảm bảo gọi đúng hàm từ model

// Controller thêm giảng viên
export async function AddLecturer(req, res) {
    try {
        const result = await addLecturer(req.body);

        if (result.success) {
            return res.status(200).json({ message: result.message });
        } else {
            return res.status(400).json({ message: result.message });
        }
    } catch (error) {
        console.error('Controller Error:', error);
        return res.status(500).json({
            message: "An error occurred while processing the request.",
            error: error.message
        });
    }
}


export async function AddStudent(req, res) {
    try {
        const result = await addStudent(req.body);
        // Nếu có statusMessage, trả về thông báo
        if (result.success) {
            return res.status(200).json({ message: result.message });
        } else {
            return res.status(400).json({ message: result.message });
        }
    } catch (error) {
        console.error('Controller Error:', error);
        return res.status(500).json({
            message: "An error occurred while processing the request.",
            error: error.message
        });
    }
}

export async function AdminLogin(req, res) {
    try {
      const result  = await adminLogin(req.body);
      
      if (result.success) {
        return res.status(200).json({
          token: "hehe",
          user: result.data
        });
      } else {
        return res.status(401).json({
          message: result.message
        });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng nhập', error: error.message });
    }
}

export async function AddClass(req, res) {
    try {
        const result = await addClass(req.body);
        // Nếu có statusMessage, trả về thông báo
        if (result.success) {
            return res.status(200).json({ message: result.message });
        } else {
            return res.status(400).json({ message: result.message });
        }
    } catch (error) {
        console.error('Controller Error:', error);
        return res.status(500).json({
            message: "An error occurred while processing the request.",
            error: error.message
        });
    }
}