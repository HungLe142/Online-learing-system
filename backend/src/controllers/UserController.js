import { checkLogin, getInfo, updateInfo } from "../models/UserModel.js"
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

export async function login(req, res) {
    try {
      const result = await checkLogin(req.body);
        const token = jwt.sign(
          {
            user_id: result.user_id,
            role: result.role, // Đưa role vào payload để kiểm tra sau này
          }, SECRET_KEY, { expiresIn: '1h' } // Token hết hạn sau 1 giờ
        );

        return res.status(200).json({
          token: token,
          user: result
        });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
}

export async function GetInfo(req, res) {
    try {
        const result = await getInfo(req.user);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export async function UpdateInfo(req, res) {
  try {
      const result = await updateInfo(req.user, req.body);
      res.status(200).json(result);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}
