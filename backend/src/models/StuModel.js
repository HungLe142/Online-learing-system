import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function getAllCourse(data) {
    try {
      const pool = await connectToDb();
      console.log(data.studentID)
      console.log( data.semesterID)
      const result = await pool.query`
        SELECT * FROM DanhSachLopHoc(${data.studentID}, ${data.semesterID})
        ORDER BY lop_id, thu
      `;
      console.log(result.recordset);
      return result.recordset
    } catch (err) {
      console.error('Lỗi khi gọi hàm:', err);
      return 1
    }
}

export async function getStudentClassInfo(data) {
  try {
    const pool = await connectToDb(); // Kết nối đến DB
    const result = await pool.query`
      EXEC GetStudentCourseInfo @ma_sinh_vien = ${data.studentID}, @hoc_ky = ${data.semesterID}
    `; 
    if (result.recordset.length === 0) {
      return { success: false, message: 'No data found.' };
    }
   
    return { success: true, data: formatClassInfo(result.recordset) };  // Trả về kết quả
  } catch (err) {
    console.error('Database error:', err);
    return { success: false, errorCode: err.number, message: err.message };  // Xử lý lỗi
  }
}

function formatClassInfo(recordset) {
  return recordset.map(item => {
      return {
          ma_sinh_vien: item.ma_sinh_vien,
          lop_id: item.lop_id,
          ten_lop: item.ten_lop,
          ma_mon_hoc: item.ma_mon_hoc,
          hoc_ky: item.hoc_ky,
          ma_giang_vien: item.ma_giang_vien,
          GiangVien: {
              ma_giang_vien: item.ma_giang_vien,
              chuyen_nganh: item.chuyen_nganh,
              User: {
                  user_id: item.user_id,
                  email: item.email,
                  so_dien_thoai: item.so_dien_thoai,
                  ho_ten: item.ho_ten,
                  ngay_sinh: item.ngay_sinh,
                  gioi_tinh: item.gioi_tinh,
                  dia_chi: item.dia_chi,
                  khoa_id: item.khoa_id
              }
          }
      };
  });
}