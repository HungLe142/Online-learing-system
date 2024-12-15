import { CheckLogin } from "../models/UserModel.js"
export async function login(req, res) {
    const { userMail, password } = req.body;
    try {
      const canLog  = await CheckLogin(req.body);
      
      if (canLog) {
        return res.status(200).json({ message: 'Can login' });
      } else {
        return res.status(401).json({ message: "Wrong mail or pass" });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng nhập', error: error.message });
    }
}
