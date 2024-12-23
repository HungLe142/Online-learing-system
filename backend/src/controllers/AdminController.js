import { login, addLecturer, addStudent, addClass, updateUserInfo, deleteUser} from '../models/AdminModel.js'; // Đảm bảo gọi đúng hàm từ model
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

export async function Login(req, res) {
    try {
        const result  = await login(req.body);
        const token = jwt.sign(
            {
                userID: result.user_id,
                role: result.role, // Đưa role vào payload để kiểm tra sau này
            }, SECRET_KEY, { expiresIn: '1h' }); // Token hết hạn sau 1 giờ
            
        return res.status(200).json({
            token: token,
            user: result
        });
    } catch (error) {
        return res.status(500).json({ message: 'Login error', error: error.message });
    }
}

export async function AddLecturer(req, res) {
    try {
        const result = await addLecturer(req.body);   
        return res.status(200).json({ message: 'OK' });
        
    } catch (err) {
        console.error('Controller Error:', error);
        res.status(500).json({ error: err.message });
    }
}


export async function AddStudent(req, res) {
    try {
        const result = await addStudent(req.body);
        // Nếu có statusMessage, trả về thông báo
        return res.status(200).json({ message: 'OK' });
        
    } catch (err) {
        console.error('Controller Error:', error);
        res.status(500).json({ error: err.message });
    }
}

export async function AddClass(req, res) {
    try {
        const result = await addClass(req.body);
        return res.status(200).json({ message: 'OK' });
    } catch (err) {
        console.error('Controller Error:', error);
        res.status(500).json({ error: err.message });
    }
}

export async function UpdateUserInfo(req, res) {
    try {
        const result = await updateUserInfo(req.body);
        return res.status(200).json({ message: 'OK' });
    } catch (err) {
        console.error('Controller Error:', error);
        res.status(500).json({ error: err.message });
    }
}

export async function DeleteUser(req, res) {
    try {
        const result = await deleteUser(req.body);
        return res.status(200).json({ message: 'OK' });
    } catch (err) {
        console.error('Controller Error:', error);
        res.status(500).json({ error: err.message });
    }
}