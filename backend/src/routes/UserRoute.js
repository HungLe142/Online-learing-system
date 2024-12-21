import express from 'express';
const router = express.Router();

import { login, get_user_info, modify_user_data } from '../controllers/UserController.js'

router.post('/login', login);
router.post('/info/:user_id', modify_user_data);
router.get('/info/:user_id', get_user_info);
router.get('/updateInfo', UpdateInfo);
export default router;
