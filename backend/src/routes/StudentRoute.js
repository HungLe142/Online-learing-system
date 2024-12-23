import express from 'express';
const router = express.Router();
import {GetTimetable , GetAllCourses, GetScores} from '../controllers/StuController.js';

// Route thêm giảng viên
router.get('/timetable', GetTimetable);
router.get('/courses', GetAllCourses);
router.get('/scores', GetScores);

export default router;
