import express from 'express';
const router = express.Router();
import { GetTimetable, GetAllCourses, CreateMaterial, RemoveMaterial } from '../controllers/LecController.js';

// Route thêm giảng viên
router.get('/timetable', GetTimetable);
router.get('/courses', GetAllCourses);
router.post('/push_doc', CreateMaterial);
router.post('/remove_doc', RemoveMaterial);


export default router;
