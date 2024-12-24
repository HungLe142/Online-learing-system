import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function getTimetable(user, data) {
    try {
      const pool = await connectToDb();
      const result = await pool.query`
        SELECT * FROM TKBSinhVien(${user.user_id}, ${data.hoc_ky})
        ORDER BY lop_id, thu
      `;
      if (result.recordset.length > 0) {
        return result.recordset
      } else {
        throw new Error('Course not found');
      }
    } catch (err) {
      console.error('Lỗi khi gọi hàm:', err);
      throw err
    }
}

export async function getAllCourses(user, data) {
  try {
      const pool = await connectToDb(); // Kết nối đến DB
      const result = await pool.query`
        EXEC DanhSachLopHoc @ma_sinh_vien = ${user.user_id}, @hoc_ky = ${data.hoc_ky}
      `; 
      return formatClassInfo(result.recordset)  // Trả về kết quả
  } catch (err) {
      console.error('Database error:', err);
      throw err;
  }
}

export const getScores = async (user, data) => {
  try {
    const pool = await connectToDb();
    const result = await pool.query`
      SELECT * FROM DiemSinhVien(${user.user_id}, ${data.hoc_ky})
    `;
    if (result.recordset.length > 0) {
      return result.recordset
    } else {
      throw new Error('Course not found');
    }
  } catch (err) {
    console.error('Error getting student scores:', err);
    throw err;  // Ném lỗi nếu có
  }
};

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