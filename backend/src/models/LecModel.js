import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function getTimetable(user, data) {
    try {
      const pool = await connectToDb();
      const result = await pool.query`
          SELECT * FROM TKBGiangVien(${user.user_id}, ${data.hoc_ky})
          ORDER BY lop_id, thu
        `;
      if (result.recordset.length > 0) {
        return result.recordset[0]
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
      const pool = await connectToDb();
      const result = await pool.request()
          .input('ma_giang_vien', sql.VARCHAR, user.user_id)
          .input('hoc_ky', sql.VARCHAR, data.hoc_ky)  // Truyền học kỳ vào câu truy vấn
          .query(`
              SELECT 
                  LOP_HOC.lop_id,
                  MON_HOC.ten_mon_hoc + ' - ' + LOP_HOC.hoc_ky + ' - ' + LOP_HOC.lop_id AS ten_lop,
                  MON_HOC.ma_mon_hoc,
                  LOP_HOC.hoc_ky
              FROM LOP_HOC
              JOIN MON_HOC ON LOP_HOC.ma_mon_hoc = MON_HOC.ma_mon_hoc
              WHERE LOP_HOC.ma_giang_vien = @ma_giang_vien AND LOP_HOC.hoc_ky = @hoc_ky;
          `);

      return result.recordset;  // Trả về danh sách các lớp học với thông tin môn học
  } catch (err) {
      console.error('Database Error:', err);
      throw err;
  }
}
