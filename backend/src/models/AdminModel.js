import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function addLecturer(data) {
    try {
      const pool = await connectToDb();
      // Gọi thủ tục ThemGiangVien
      const result = await pool.request()
        .input('user_mail', sql.VARCHAR, data.userMail)
        .input('mat_khau', sql.VARCHAR, data.password)
        .input('ho_ten', sql.NVARCHAR, data.fullName)
        .input('gioi_tinh', sql.VARCHAR, data.gender)
        .input('ngay_sinh', sql.DATE, data.dateOfBirth)
        .input('email', sql.VARCHAR, data.email)
        .input('so_dien_thoai', sql.VARCHAR, data.phoneNumber)
        .input('dia_chi', sql.NVARCHAR, data.address)
        .input('hoc_vi', sql.NVARCHAR, data.academicDegree)
        .input('chuyen_nganh', sql.NVARCHAR, data.specialization)
        .input('khoa_id', sql.VARCHAR, data.departmentId)
        .execute('ThemGiangVien');
      // Lấy thông báo từ thủ tục
      return 0
    } catch (err) {
      if (err.number === 2627) {
        console.error('Error: Duplicate entry (unique constraint violation).');
        return 'Error: Duplicate entry (unique constraint violation).'
      } else {
        console.error('Error: ', err);
      }
      return 1
    }
}

export async function addStudent(data) {
    try {
      const pool = await connectToDb();
      // Gọi thủ tục ThemSinhVien
      const result = await pool.request()
        .input('user_mail', sql.VARCHAR, data.userMail)
        .input('mat_khau', sql.VARCHAR, data.password)
        .input('ho_ten', sql.NVARCHAR, data.fullName)
        .input('gioi_tinh', sql.VARCHAR, data.gender)
        .input('ngay_sinh', sql.DATE, data.dateOfBirth)
        .input('email', sql.VARCHAR, data.email)
        .input('so_dien_thoai', sql.VARCHAR, data.phoneNumber)
        .input('dia_chi', sql.NVARCHAR, data.address)
        .input('khoa_id', sql.VARCHAR, data.departmentId)
        .execute('ThemSinhVien');
      // Lấy thông báo từ thủ tục
      return 0
    } catch (err) {
      if (err.number === 2627) {
        console.error('Error: Duplicate entry (unique constraint violation).');
      } else {
        console.error('Error: ', err);
      }
      return 1
    }
  }
