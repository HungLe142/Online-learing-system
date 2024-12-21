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

        let query = '';
        if (user_id.startsWith('GV')) {
            // Nếu user_id bắt đầu bằng 'GV', thực hiện join bảng USER và GIANG_VIEN
            query = `
                SELECT u.*, gv.hoc_vi, gv.chuyen_nganh
                FROM [USER] u
                JOIN GIANG_VIEN gv ON u.user_id = gv.ma_giang_vien
                WHERE u.user_id = @user_id
            `;
        } else {
            // Nếu user_id không bắt đầu bằng 'GV', chỉ lấy dữ liệu từ bảng USER
            query = 'SELECT * FROM [USER] WHERE user_id = @user_id';
        }

        // Thực hiện truy vấn lấy thông tin user
        const result = await pool.request()
            .input('user_id', sql.VarChar(20), user_id)
            .query(query);

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

export async function update_user_info(user_id, ho_ten, ngay_sinh, so_dien_thoai, dia_chi) {
  let pool;
  try {
      // Kết nối tới database
      pool = await connectToDb();

      // Câu truy vấn cập nhật thông tin user
      const query = `
          UPDATE [USER]
          SET ho_ten = @ho_ten,
              ngay_sinh = @ngay_sinh,
              so_dien_thoai = @so_dien_thoai,
              dia_chi = @dia_chi
          WHERE user_id = @user_id
      `;

      // Thực hiện truy vấn cập nhật
      const result = await pool.request()
          .input('user_id', sql.VarChar(20), user_id)
          .input('ho_ten', sql.NVarChar(255), ho_ten)
          .input('ngay_sinh', sql.Date, ngay_sinh)
          .input('so_dien_thoai', sql.VarChar(20), so_dien_thoai)
          .input('dia_chi', sql.NVarChar(255), dia_chi)
          .query(query);

      // Kiểm tra kết quả và trả về thông tin user đã cập nhật
      if (result.rowsAffected > 0) {
          return await fetch_user_info(user_id);
      } else {
          throw new Error('Cập nhật thông tin user không thành công');
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




    
      if (result.returnValue !== 0) {
        return { success: false, message: `Error occurred. Code: ${result.returnValue}` };
      } else {
        return { success: true, message: 'Info updated successfully!' };
      }
    } catch (err) {
      console.error('Database error:', err);
      return { success: false, message: `Error occurred. Code: ${err.number}` };
    }
}

