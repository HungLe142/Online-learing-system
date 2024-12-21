import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function getAllCourse(data) {
    try {
      const pool = await connectToDb();
      const result = await pool.query`
          SELECT * FROM DanhSachLopGiangDay(${data.lecturerID}, ${data.semesterID})
          ORDER BY lop_id, thu
        `;
      console.log(result.recordset);
      return result.recordset
    } catch (err) {
      console.error('Lỗi khi gọi hàm:', err);
      return 1
    }
}

