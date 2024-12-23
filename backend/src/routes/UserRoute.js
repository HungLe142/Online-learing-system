import express from 'express';
const router = express.Router();

import { login, GetInfo, UpdateInfo } from '../controllers/UserController.js'

router.post('/login', login);
router.get('/info', GetInfo);
router.post('/updInfo', UpdateInfo);

export default router;
