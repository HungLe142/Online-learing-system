import express from 'express';
const router = express.Router();

import { login, get_user_info, UpdateInfo } from '../controllers/UserController.js'

router.post('/login', login);
router.get('/info/:user_id', get_user_info);
router.get('/updateInfo', UpdateInfo);
export default router;
