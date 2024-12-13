const express = require("express");
const adminController = require("../controllers/adminController");
const { authenticateToken, checkAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.put("/update-user/:user_id", authenticateToken, checkAdmin, adminController.updateUser);
router.get("/", authenticateToken, checkAdmin, adminController.getUsers); 
router.delete("/:user_id", authenticateToken, checkAdmin, adminController.deleteUser); 
router.post("/create-student", authenticateToken, checkAdmin, adminController.createStudent);
router.post("/create-lecture", authenticateToken, checkAdmin, adminController.createLecture);

module.exports = router;
