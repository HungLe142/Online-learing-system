import { getAllCourse, getStudentClassInfo, getStudentScores } from '../models/StuModel.js';

export async function GetAllCourse(req, res) {
    try {
        const result = await getAllCourse(req.query);
        // Nếu có statusMessage, trả về thông báo
        if (result != 1) return res.status(200).json({ message: result });
        else return res.status(200).json({ message: "Trả về thất bại" });

    } catch (error) {
        console.error('Error adding lecturer:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm giảng viên', error: error.message });
    }
}

export async function GetStudentClassInfo(req, res) {
    try {
      const result = await getStudentClassInfo(req.query);  // Gọi model để lấy dữ liệu từ DB
  
      if (result.success) {
        return res.status(200).json({ message: result.data });  // Trả về dữ liệu nếu thành công
      } else {
        return res.status(400).json({
          success: false,
          errorCode: result.errorCode,
          message: result.message
        });  // Trả về lỗi nếu không có dữ liệu
      }
    } catch (error) {
      console.error('Error in ClassResources:', error);
      return res.status(500).json({
        success: false,
        message: 'Error occurred while fetching student class info.',
        error: error.message
      });  // Xử lý lỗi khi gọi API
    }
  }

  export const GetScores = async (req, res) => {
    try {
      // Lấy điểm từ model
      const scores = await getStudentScores(req.query);
      if (scores.length === 0) {
        return res.status(404).json({ message: 'No scores found for this student in the given semester.' });
      }
  
      // Trả về dữ liệu cho client
      return res.status(200).json(scores);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving scores', error });
    }
  };