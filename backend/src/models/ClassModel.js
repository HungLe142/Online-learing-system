import { connectToDb } from '../config/database.js';
import sql from 'mssql';

// Hàm lấy tài nguyên lớp học
export async function classResources(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.query`
      SELECT * FROM TaiNguyenLopHoc(${data.lop_id})
    `; 
    if (result.recordset.length === 0) {
      throw new Error("Data not found")
    }
    return result.recordset;
  } catch (err) {
    console.error('Database error:', err);
    throw err
  }
}

// Hàm cập nhật điểm
export async function updateScore(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.request()
      .input('lop_id', sql.VARCHAR, data.lop_id)
      .input('ma_sinh_vien', sql.VARCHAR, data.ma_sinh_vien)
      .input('diem_bt', sql.Float, data.diem_bt)
      .input('diem_btl', sql.Float, data.diem_btl)
      .input('diem_gk', sql.Float, data.diem_gk)
      .input('diem_ck', sql.Float, data.diem_ck)
      .execute('CapNhatDiem');
    
      if (result.returnValue !== 0) {
          throw new Error("Updata error")
      } else {
          return { message: 'Score updated successfully!' };
      }
    } catch (err) {
      console.error('Database error:', err);
      throw err;
    }
}
// Hàm lấy điểm
export async function getScore(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.request()
            .input('lop_id', sql.VARCHAR, data.lop_id)  // Truyền mã lớp học vào câu truy vấn
            .query(`
                SELECT 
                    THAM_GIA_LOP_HOC.ma_sinh_vien,
                    [USER].ho_ten, 
                    THAM_GIA_LOP_HOC.diem_bt,
                    THAM_GIA_LOP_HOC.diem_btl,
                    THAM_GIA_LOP_HOC.diem_gk,
                    THAM_GIA_LOP_HOC.diem_ck,
                    THAM_GIA_LOP_HOC.diem_tong_ket
                FROM THAM_GIA_LOP_HOC
                JOIN [USER] ON THAM_GIA_LOP_HOC.ma_sinh_vien = [USER].user_id
                WHERE THAM_GIA_LOP_HOC.lop_id = @lop_id;
            `);
    if (result.recordset.length === 0) {
      throw new Error("Data not found")
    }
    return result.recordset
  } catch (err) {
    console.error('Database error:', err);
    throw err;
  }
}

// Hàm lấy thông tin forum
export async function forum(data) {
  try {
    const pool = await connectToDb();
    const result = await pool.query`
      SELECT * FROM ThongTinForum(${data.lop_id}, ${data.dien_dan_id})
    `;
    console.log(result)
    if (result.recordset.length === 0) {
      throw new Error("Data not found")
    }
    return result.recordset;
  } catch (err) {
    console.error('Database error:', err);
    throw err;
  }
}
