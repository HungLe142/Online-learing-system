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
              khoa_id: user.khoa_id,
              role: user.user_id.startsWith('GV')
                        ? 'teacher' // Giáo viên
                        : user.user_id.startsWith('SV')
                        ? 'student' // Sinh viên
                        : 'unknown'
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

export async function fetch_user_info(user_id) {
    let pool;
    try {
        // Kết nối tới database
        pool = await connectToDb();

        // Thực hiện truy vấn lấy thông tin user theo user_id
        const result = await pool.request()
            .input('user_id', sql.VarChar(20), user_id)
            .query('SELECT * FROM [USER] WHERE user_id = @user_id');

        // Kiểm tra kết quả và trả về thông tin user
        if (result.recordset.length > 0) {
            return result.recordset[0];
        } else {
            throw new Error('User không tồn tại');
        }
    } catch (err) {
        console.error('Lỗi truy vấn dữ liệu:', err);
        throw err;
    } finally {
        // Đóng kết nối khi không còn sử dụng
        if (pool) {
            pool.close();
        }
    }
}



