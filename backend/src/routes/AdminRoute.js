import express from 'express';

const router = express.Router();

import {AddLecturer, AddStudent} from '../controllers/AdminController.js';

// Route thêm giảng viên
router.post('/addLecturer', AddLecturer);
router.post('/addStudent', AddStudent);


export default router;
