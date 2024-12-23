import express from 'express';

const router = express.Router();

import {Login, AddLecturer, AddStudent, AddClass, UpdateUserInfo, DeleteUser} from '../controllers/AdminController.js';

// Route thêm giảng viên
router.post('/login', Login);
router.post('/addClass', AddClass);
router.post('/addLecturer', AddLecturer);
router.post('/addStudent', AddStudent);
router.post('/updUser', UpdateUserInfo);
router.post('/delUser', DeleteUser);

export default router;
