/*
    To do:
        - Handle post request:
            + Create a SINH_VIEN tuple
            + Create lecture tuple

    Backlog:
        - Return DANH SACH DANG KY MON
        - CHINH SUA TRANG THAI DANG KY MON
*/
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
  try {
    const { user_id } = req.params; 
    const updatedData = req.body; 

    
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "Người dùng không tồn tại." });
    }

    await user.update(updatedData);

    res.status(200).json({
      message: "Thông tin người dùng đã được cập nhật thành công!",
      user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." });
  }
};

// Tạo một tuple Student (Sinh viên)
exports.createStudent = async (req, res) => {
  try {
    const { email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, mat_khau } = req.body;

    if (!email || !mat_khau || !ho_ten) {
      return res.status(400).json({ error: "Email, mật khẩu và họ tên là bắt buộc." });
    }

    const hashedPassword = await bcrypt.hash(mat_khau, 10);

    const newStudent = await User.create({
      email,
      so_dien_thoai,
      ho_ten,
      ngay_sinh,
      gioi_tinh,
      mat_khau: hashedPassword,
      quyen: "sinh_vien", 
    });

    res.status(201).json({ message: "Tạo sinh viên thành công!", user: newStudent });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." });
  }
};

// Tạo một tuple Lecture (Giảng viên)
exports.createLecture = async (req, res) => {
  try {
    const { email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, mat_khau } = req.body;

    if (!email || !mat_khau || !ho_ten) {
      return res.status(400).json({ error: "Email, mật khẩu và họ tên là bắt buộc." });
    }

    const hashedPassword = await bcrypt.hash(mat_khau, 10);

    const newLecture = await User.create({
      email,
      so_dien_thoai,
      ho_ten,
      ngay_sinh,
      gioi_tinh,
      mat_khau: hashedPassword,
      quyen: "giang_vien", 
    });

    res.status(201).json({ message: "Tạo giảng viên thành công!", user: newLecture });
  } catch (error) {
    console.error("Error creating lecture:", error);
    res.status(500).json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." });
  }
};
  
  // Lấy tất cả người dùng
  exports.getUsers = async (req, res) => {
    try {
      const users = await User.findAll(); 
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." });
    }
  };

  // Xóa người dùng
exports.deleteUser = async (req, res) => {
    try {
      const { user_id } = req.params;
  
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ error: "Người dùng không tồn tại." });
      }
  
      await user.destroy();
      res.status(200).json({ message: "Xóa tài khoản thành công!" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." });
    }
  };