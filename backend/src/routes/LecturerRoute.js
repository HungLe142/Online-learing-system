import express from 'express';
const router = express.Router();
import { GetTimetable, GetAllCourses } from '../controllers/LecController.js';

// Route thêm giảng viên
router.get('/timetable', GetTimetable);
router.get('/courses', GetAllCourses);

export default router;
