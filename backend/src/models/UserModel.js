import { connectToDb } from '../config/database.js';
import sql from 'mssql';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function checkLogin(data) {
    try {
        const pool = await connectToDb();
        const result = await pool.request()
            .input('user_mail', sql.VARCHAR, data.user_mail) // Gán giá trị đầu vào
            .query('SELECT user_id, mat_khau FROM [USER] WHERE user_mail = @user_mail');

        if (result.recordset.length > 0) {
            const hashedPassword = result.recordset[0].mat_khau;
            const match = await bcrypt.compare(data.mat_khau, hashedPassword);
            if(match){
                const user = await getInfo({ user_id: result.recordset[0].user_id })
                return {
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
            }else{
                throw new Error('Wrong password');
            }
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        console.error('Lỗi truy vấn dữ liệu:', err);
      throw err;
    }
}

export async function getInfo(user) {
    try {
        const pool = await connectToDb();
        let query = '';
        if (user.role == 'teacher') {
            query = `
                SELECT u.* , gv.hoc_vi, gv.chuyen_nganh
                FROM [USER] u
                JOIN GIANG_VIEN gv ON u.user_id = gv.ma_giang_vien
                WHERE u.user_id = @user_id
            `;
        } else {
            query = 'SELECT * FROM [USER] WHERE user_id = @user_id';
        }

        const result = await pool.request()
            .input('user_id', sql.VarChar(20), user.user_id)
            .query(query);

        // Kiểm tra kết quả và trả về thông tin user
        if (result.recordset.length > 0) {
            return result.recordset[0]
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        console.error('Lỗi truy vấn dữ liệu:', err);
        throw err;
    }
}

export async function updateInfo(user, data) {
  try {
      const pool = await connectToDb();
      const query = `
          UPDATE [USER]
          SET ho_ten = @ho_ten,
              ngay_sinh = @ngay_sinh,
              so_dien_thoai = @so_dien_thoai,
              dia_chi = @dia_chi
          WHERE user_id = @user_id
      `;

      const result = await pool.request()
          .input('user_id', sql.VarChar(20), user.user_id)
          .input('ho_ten', sql.NVarChar(255), data.ho_ten)
          .input('ngay_sinh', sql.Date, data.ngay_sinh)
          .input('so_dien_thoai', sql.VarChar(20), data.so_dien_thoai)
          .input('dia_chi', sql.NVarChar(255), data.dia_chi)
          .query(query);

      if (result.rowsAffected > 0) {
          return await getInfo(user);
      } else {
          throw new Error('User info update failed');
      }
  } catch (err) {
      console.error('Lỗi truy vấn dữ liệu:', err);
      throw err;
  } 
}


