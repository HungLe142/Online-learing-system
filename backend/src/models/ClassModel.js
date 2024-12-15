import { connectToDb } from '../config/database.js';
import sql from 'mssql';

export async function classResources(data) {
  try {
    const pool = await connectToDb();

    // Gọi hàm TaiNguyenLopHoc với tham số
    const result = await pool.query`
      SELECT * FROM TaiNguyenLopHoc(${data.classID})
    `; 
    return result.recordset;

  } catch (err) {
    console.error('Lỗi khi gọi hàm TaiNguyenLopHoc:', err);
    return 1
  }
}

export async function updateScore(data) {
    try {
      const pool = await connectToDb();
      // Gọi thủ tục ThemGiangVien
      const result = await pool.request()
        .input('lop_id', sql.VARCHAR, data.classID)
        .input('ma_sinh_vien', sql.VARCHAR, data.studentID)
        .input('diem_bt', sql.Float, data.assnScore)
        .input('diem_btl', sql.Float, data.projScore)
        .input('diem_gk', sql.Float, data.midScore)
        .input('diem_ck', sql.Float, data.finalScore)
        .execute('CapNhatDiem');
      // Lấy thông báo từ thủ tục
      return result
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

export async function getScore(data) {
  try {
    const pool = await connectToDb();
    console.log(data)
    const result = await pool.query`
      SELECT * FROM XemDiem(${data.classID}, ${data.studentID})
    `;
    console.log(result.recordset);
    return result.recordset
  } catch (err) {
    console.error('Lỗi khi gọi hàm:', err);
    return 1
  }
}

export async function forum(data) {
  try {
    const pool = await connectToDb();
    console.log(data)
    const result = await pool.query`
      SELECT * FROM LayThongTinForum(${data.classID}, ${data.forumID})
    `;
    console.log(result.recordset);
    return result.recordset
  } catch (err) {
    console.error('Lỗi khi gọi hàm:', err);
    return 1
  }
}
