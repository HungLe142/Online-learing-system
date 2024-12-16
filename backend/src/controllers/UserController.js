import { CheckLogin } from "../models/UserModel.js"
export async function login(req, res) {
    try {
      const result  = await CheckLogin(req.body);
      
      if (result.success) {
        return res.status(200).json({
          token: "hehe",
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
