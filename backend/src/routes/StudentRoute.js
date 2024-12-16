import express from 'express';
const router = express.Router();
import {GetAllCourse , GetStudentClassInfo} from '../controllers/StuController.js';

// Route thêm giảng viên
router.get('/courses', GetAllCourse);
router.get('/GetStudentClassInfo', GetStudentClassInfo);

export default router;
