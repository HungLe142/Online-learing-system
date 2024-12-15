import express from 'express';
const router = express.Router();
import {GetAllCourse} from '../controllers/LecController.js';

// Route thêm giảng viên
router.get('/courses', GetAllCourse);



export default router;
