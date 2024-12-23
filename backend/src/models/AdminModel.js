import { connectToDb } from '../config/database.js';
import sql from 'mssql';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function login(data) {
    try {
        const pool = await connectToDb();
        const result = await pool.request()
            .input('user_mail', sql.VarChar, data.user_mail)
            .input('mat_khau', sql.VarChar, data.mat_khau)
            .execute('KiemTraDangNhapAdmin');

        if (result.recordset.length > 0) {
            // Nếu tìm thấy admin, trả về thông tin admin
            const admin = result.recordset[0];
            return {
                user_id: admin.user_id,
                user_mail: admin.user_mail,
                ho_ten: admin.ho_ten,
                so_dien_thoai: admin.so_dien_thoai,
                dia_chi: admin.dia_chi,
                role: "admin"
            };
        } else {
            throw new Error('Admin not found');
        }
    } catch (err) {
        console.error('Error during login:', err);
        throw err;
    }
}

export async function addLecturer(data) {
  try {
        const hashedPassword = await bcrypt.hash(data.mat_khau, saltRounds);
        const pool = await connectToDb();
        const result = await pool.request()
            .input('user_mail', sql.VARCHAR, data.user_mail)
            .input('mat_khau', sql.VARCHAR, hashedPassword)
            .input('ho_ten', sql.NVARCHAR, data.ho_ten)
            .input('gioi_tinh', sql.VARCHAR, data.gioi_tinh)
            .input('ngay_sinh', sql.DATE, data.ngay_sinh)
            .input('email', sql.VARCHAR, data.email)
            .input('so_dien_thoai', sql.VARCHAR, data.so_dien_thoai)
            .input('dia_chi', sql.NVARCHAR, data.dia_chi)
            .input('hoc_vi', sql.NVARCHAR, data.hoc_vi)
            .input('chuyen_nganh', sql.NVARCHAR, data.chuyen_nganh)
            .input('khoa_id', sql.VARCHAR, data.khoa_id)
            .execute('ThemGiangVien');

        // Kiểm tra giá trị trả về
            return { message: "Lecturer added successfully!" };
    } catch (err) {
        console.error('Database Error:', err);
        throw err
    }
}

export async function addStudent(data) {
    try {
        const hashedPassword = await bcrypt.hash(data.mat_khau, saltRounds);
        const pool = await connectToDb();
        // Gọi thủ tục ThemSinhVien
        const result = await pool.request()
            .input('user_mail', sql.VARCHAR, data.user_mail)
            .input('mat_khau', sql.VARCHAR, hashedPassword)
            .input('ho_ten', sql.NVARCHAR, data.ho_ten)
            .input('gioi_tinh', sql.VARCHAR, data.gioi_tinh)
            .input('ngay_sinh', sql.DATE, data.ngay_sinh)
            .input('email', sql.VARCHAR, data.email)
            .input('so_dien_thoai', sql.VARCHAR, data.so_dien_thoai)
            .input('dia_chi', sql.NVARCHAR, data.dia_chi)
            .input('khoa_id', sql.VARCHAR, data.khoa_id)
            .execute('ThemSinhVien');
        // Lấy thông báo từ thủ tục
        return { message: "Student added successfully!" };
    } catch (err) {
        console.error('Database Error:', err);
        throw err
    }
}

export async function addClass(data) {
    try {
        const pool = await connectToDb();
        const result = await pool.request()
                .input('hoc_ky', sql.NVarChar(20), data.hoc_ky)
                .input('ma_mon_hoc', sql.NVarChar(20), data.ma_mon_hoc)
                .input('ma_giang_vien', sql.NVarChar(20), data.ma_giang_vien)
                .input('classTimetable', sql.NVarChar(sql.MAX), JSON.stringify(data.classTimetable))
                .execute('TaoLopHoc');
        // Lấy thông báo từ thủ tục
        return { message: "Student added successfully!" };
    } catch (err) {
        console.error('Database Error:', err);
        throw err
    }
}

export async function updateUserInfo(data) {
    try {
        const pool = await connectToDb(); 
        let hashedPassword = null;
        if(data.password) hashedPassword = await bcrypt.hash(data.mat_khau, saltRounds);
        console.log(data.userID)
        const result = await pool.request()
            .input('user_id', sql.VARCHAR, data.user_id)
            .input('mat_khau', sql.VARCHAR, hashedPassword) 
            .input('ho_ten', sql.NVARCHAR, data.ho_ten || null)
            .input('gioi_tinh', sql.VARCHAR, data.gioi_tinh || null)
            .input('ngay_sinh', sql.DATE, data.ngay_sinh || null)
            .input('email', sql.VARCHAR, data.email || null)
            .input('so_dien_thoai', sql.VARCHAR, data.so_dien_thoai || null)
            .input('dia_chi', sql.NVARCHAR, data.dia_chi || null)
            .input('khoa_id', sql.VARCHAR, data.khoa_id || null)
            .execute('CapNhatThongTinUser'); // Thực thi thủ tục
  
        return { message: "User information updated successfully!" };
    } catch (err) {
        console.error('Database Error:', err); // Log lỗi nếu có
        throw err; // Ném lỗi nếu gặp sự cố
    }
  }

export async function deleteUser(data) {
    try {
        const pool = await connectToDb(); 
        const result = await pool.request()
            .input('user_id', sql.VARCHAR, data.user_id) 
            .query('DELETE FROM [USER] WHERE user_id = @user_id');

        if (result.rowsAffected[0] > 0) {
            return { message: "User deleted successfully!" };
        } else {
            throw new error ("User not found!" );
        }
    } catch (err) {
        console.error('Database Error:', err); // Log lỗi nếu có
        throw err; // Ném lỗi nếu gặp sự cố
    }
}