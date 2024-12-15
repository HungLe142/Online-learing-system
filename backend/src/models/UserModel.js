import { connectToDb } from '../config/database.js';
import sql from 'mssql';


export async function CheckLogin(data) {
    try {
      const pool = await connectToDb();
      const result = await pool.request()
        .input('user_mail', sql.VARCHAR, data.userMail)
        .input('mat_khau', sql.VARCHAR, data.password)
        .execute('KiemTraDangNhap');
        // Trả về đối tượng chứa cả 2 biến
        return result.returnValue;
      
    } catch (err) {
      console.error('Error:', err);
      return false;
    }
}

