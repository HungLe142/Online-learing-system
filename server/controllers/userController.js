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

// Cập nhật thông tin người dùng
exports.updatePersonalInfo = async (req, res) => {
  try {
    const { user_id } = req.params; 
    const { email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh } = req.body; 

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "Người dùng không tồn tại." });
    }

    if (req.user.user_id !== user_id) {
      return res.status(403).json({ error: "Sai người dùng" });
    }

    await user.update({
      email: email || user.email,
      so_dien_thoai: so_dien_thoai || user.so_dien_thoai,
      ho_ten: ho_ten || user.ho_ten,
      ngay_sinh: ngay_sinh || user.ngay_sinh,
      gioi_tinh: gioi_tinh || user.gioi_tinh,
    });

    res.status(200).json({
      message: "Cập nhật thông tin cá nhân thành công!",
      user,
    });
  } catch (error) {
    console.error("Error updating personal information:", error);
    res.status(500).json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." });
  }
};


