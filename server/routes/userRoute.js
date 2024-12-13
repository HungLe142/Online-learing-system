const express = require("express");
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/update-info/:user_id", authenticateToken, userController.updatePersonalInfo);


module.exports = router;
