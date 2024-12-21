import { CheckLogin, fetch_user_info, updateInfo } from "../models/UserModel.js"
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

export async function login(req, res) {
    try {
      const result  = await CheckLogin(req.body);
    
      if (result.success) {
        const user = result.data;
        const token = jwt.sign(
          {
            user_id: user.user_id,
            role: user.role, // Đưa role vào payload để kiểm tra sau này
          },
          SECRET_KEY,
          { expiresIn: '1h' } // Token hết hạn sau 1 giờ
        );

        return res.status(200).json({
          token: token,
          user: result.data
        });
      } else {
        return res.status(401).json({
          message: result.message
        });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng nhập', error: error.message });
    }
}

export async function get_user_info(req, res) {
    const user_id = req.params.user_id;
    try {
        const userInfo = await fetch_user_info(user_id);
        res.json(userInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function UpdateInfo(req, res) {
  try {
    const result = await updateInfo(req.body);
    
    if (result.success) {
      return res.status(200).json({ message: result.message });  // Trả về thông báo thành công
    } else {
      return res.status(400).json({
        success: false,
        errorCode: result.errorCode,
        message: result.message
      });  // Trả về lỗi nếu có
    }
  } catch (error) {
    console.error('Error in UpdateScore:', error);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while updating info.',
      error: error.message
    });
  }
}
