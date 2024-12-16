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
        if (result.recordset.length > 0) {
          const user = result.recordset[0];
          return { 
            success: true, 
            data: {
              user_id: user.user_id,
              user_mail: user.user_mail,
              ho_ten: user.ho_ten,
              so_dien_thoai: user.so_dien_thoai,
              ngay_sinh: user.ngay_sinh,
              gioi_tinh: user.gioi_tinh,
              dia_chi: user.dia_chi,
              khoa_id: user.khoa_id
            }
          };
        } else {
          return { 
            success: false, 
            message: 'Invalid email or password'
          };
        }
      
    } catch (err) {
      console.error('Error:', err);
      return false;
    }
}

