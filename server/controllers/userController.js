const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, mat_khau, quyen } = req.body;

    // Tạo người dùng mới
    const newUser = await User.create({
      email,
      so_dien_thoai,
      ho_ten,
      ngay_sinh,
      gioi_tinh,
      mat_khau,
      quyen,
    });

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const { user_id } = req.params;
      const updatedData = req.body;
  
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      await user.update(updatedData);
      res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const { user_id } = req.params;
  
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      await user.destroy();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  