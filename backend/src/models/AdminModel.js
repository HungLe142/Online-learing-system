import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function addLecturer(data) {
  try {
      const pool = await connectToDb();
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

      // Kiểm tra giá trị trả về
      if (result.returnValue === 0) {
          return { success: true, message: "Lecturer added successfully!" };
      } else if (result.returnValue === 2627 || result.returnValue === 2601) {
          return { success: false, message: "Error: Duplicate entry. The user email already exists." };
      } else  {
          return { success: false, message: `Error occurred. Code: ${result.returnValue}` };
      }
  } catch (err) {
      console.error('Database Error:', err);
      return { success: false, message: 'Failed to add lecturer.', error: err.message };
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
      if (result.returnValue === 0) {
          return { success: true, message: "Student added successfully!" };
      } else if (result.returnValue === 2627 || result.returnValue === 2601) {
          return { success: false, message: "Error: Duplicate entry. The user email already exists." };
      } else {
          return { success: false, message: `Error occurred. Code: ${result.returnValue}` };
      }
    } catch (err) {
        console.error('Database Error:', err);
        return { success: false, message: 'Failed to add student.', error: err.message };
    }
}
