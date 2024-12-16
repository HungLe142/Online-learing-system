import { connectToDb } from '../config/database.js';
import sql from 'mssql';

// Hàm lấy tài nguyên lớp học
export async function classResources(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.query`
      SELECT * FROM TaiNguyenLopHoc(${data.classID})
    `; 
    if (result.recordset.length === 0) {
      return { success: false, message: 'No data found.' };
    }
    return { success: true, data: result.recordset };
  } catch (err) {
    console.error('Database error:', err);
    return { success: false, errorCode: err.number, message: err.message };  // Trả về mã lỗi và thông điệp khi lỗi
  }
}

// Hàm cập nhật điểm
export async function updateScore(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.request()
      .input('lop_id', sql.VARCHAR, data.classID)
      .input('ma_sinh_vien', sql.VARCHAR, data.studentID)
      .input('diem_bt', sql.Float, data.assnScore)
      .input('diem_btl', sql.Float, data.projScore)
      .input('diem_gk', sql.Float, data.midScore)
      .input('diem_ck', sql.Float, data.finalScore)
      .execute('CapNhatDiem');
    
      if (result.returnValue !== 0) {
        return { success: false, message: `Error occurred. Code: ${result.returnValue}` };
      } else {
        return { success: true, message: 'Score updated successfully!' };
      }
    } catch (err) {
      console.error('Database error:', err);
      return { success: false, message: `Error occurred. Code: ${err.number}` };
    }
}
// Hàm lấy điểm
export async function getScore(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.query`
      SELECT * FROM XemDiem(${data.classID}, ${data.studentID})
    `;
    if (result.recordset.length === 0) {
      return { success: false, message: 'No data found.' };
    }
    return { success: true, data: result.recordset };
  } catch (err) {
    console.error('Database error:', err);
    return { success: false, errorCode: err.number, message: err.message };  // Trả về mã lỗi và thông điệp khi lỗi
  }
}

// Hàm lấy thông tin forum
export async function forum(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.query`
      SELECT * FROM LayThongTinForum(${data.classID}, ${data.forumID})
    `;
    if (result.recordset.length === 0) {
      return { success: false, message: 'No data found.' };
    }
    return { success: true, data: result.recordset };
  } catch (err) {
    console.error('Database error:', err);
    return { success: false, errorCode: err.number, message: err.message };  // Trả về mã lỗi và thông điệp khi lỗi
  }
}
