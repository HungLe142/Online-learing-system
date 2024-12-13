const User = require("../models/userModel");
const bcrypt = require("bcrypt");


//kiểm tra login và trả về thông tin 
exports.login = async (req, res) => {
  try {
    const { email, mat_khau } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Email không tồn tại!" });
    }

    const isPasswordValid = await bcrypt.compare(mat_khau, user.mat_khau);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Mật khẩu không chính xác!" });
    }

    res.status(200).json({
      message: "Đăng nhập thành công!",
      user: {
        user_id: user.user_id,
        email: user.email,
        ho_ten: user.ho_ten,
        quyen: user.quyen, 
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//tạo người dùng mới
exports.createUser = async (req, res) => {
  try {
    const { email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, mat_khau, quyen } = req.body;

    if (!email || !mat_khau || !ho_ten) {
      return res.status(400).json({ error: "Email, mật khẩu và họ tên là bắt buộc." });
    }

    const hashedPassword = await bcrypt.hash(mat_khau, 10);

    const newUser = await User.create({
      email,
      so_dien_thoai,
      ho_ten,
      ngay_sinh,
      gioi_tinh,
      mat_khau: hashedPassword,
      quyen,
    });

    res.status(201).json({ message: "Tạo tài khoản thành công!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
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
    res.status(200).json({ message: "Cập nhật thành công!", user });
  } catch (error) {
    console.error("Error updating user:", error);
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
