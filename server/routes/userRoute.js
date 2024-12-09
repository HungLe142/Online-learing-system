const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getUsers); // Lấy danh sách người dùng
router.post("/", userController.createUser); // Tạo người dùng mới
router.put("/:user_id", userController.updateUser); // Cập nhật thông tin người dùng
router.delete("/:user_id", userController.deleteUser); // Xóa người dùng

module.exports = router;
