import express from 'express';
const router = express.Router();
import { UpdateScore, GetScore, Forum, ClassResources } from '../controllers/ClassController.js';

// Route thêm giảng viên
router.get('/classResources', ClassResources);
router.post('/updateScore', UpdateScore);
router.get('/scores', GetScore);
router.get('/forum' ,Forum);
export default router;
