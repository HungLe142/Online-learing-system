import express from 'express';
const router = express.Router();
import {GetAllCourse , GetStudentClassInfo, GetScores} from '../controllers/StuController.js';

// Route thêm giảng viên
router.get('/courses', GetAllCourse);
router.get('/GetStudentClassInfo', GetStudentClassInfo);
router.get('/getScore', GetScores);
export default router;
