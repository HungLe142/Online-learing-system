import { CheckLogin, fetch_user_info } from "../models/UserModel.js"
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

export async function get_user_info(req, res) {
    const user_id = req.params.user_id;
    try {
        const userInfo = await fetch_user_info(user_id);
        res.json(userInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
