import express from 'express';

const router = express.Router();

import {AddLecturer, AddStudent, AdminLogin, AddClass} from '../controllers/AdminController.js';

// Route thêm giảng viên
router.post('/addClass', AddClass);
router.post('/addLecturer', AddLecturer);
router.post('/addStudent', AddStudent);
router.post('/login', AdminLogin);

export default router;
