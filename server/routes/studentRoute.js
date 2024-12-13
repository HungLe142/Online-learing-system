const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/:student_id/classes", studentController.getClasses); 
router.get("/:student_id/:classe_id", studentController.getMaterials); 
router.get("/:student_id/scores", studentController.getScores); 

module.exports = router;
