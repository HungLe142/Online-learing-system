import { classResources, getScore, updateScore, forum } from '../models/ClassModel.js';

// Controller lấy tài nguyên lớp học
export async function ClassResources(req, res) {
  try {
    const result = await classResources(req.query);
    
    if (result.success) {
      return res.status(200).json({ message: result.data });  // Trả về dữ liệu khi thành công
    } else {
      return res.status(400).json({
        success: false,
        errorCode: result.errorCode,
        message: result.message
      });  // Trả về lỗi nếu có
    }
  } catch (error) {
    console.error('Error in ClassResources:', error);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while fetching class resources.',
      error: error.message
    });
  }
}

// Controller cập nhật điểm
export async function UpdateScore(req, res) {
  try {
    const result = await updateScore(req.body);
    
    if (result.success) {
      return res.status(200).json({ message: result.message });  // Trả về thông báo thành công
    } else {
      return res.status(400).json({
        success: false,
        errorCode: result.errorCode,
        message: result.message
      });  // Trả về lỗi nếu có
    }
  } catch (error) {
    console.error('Error in UpdateScore:', error);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while updating score.',
      error: error.message
    });
  }
}

// Controller lấy điểm
export async function GetScore(req, res) {
  try {
    const result = await getScore(req.query);
    
    if (result.success) {
      return res.status(200).json({ message: result.data });  // Trả về dữ liệu khi thành công
    } else {
      return res.status(400).json({
        success: false,
        errorCode: result.errorCode,
        message: result.message
      });  // Trả về lỗi nếu có
    }
  } catch (error) {
    console.error('Error in GetScore:', error);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while fetching scores.',
      error: error.message
    });
  }
}

// Controller lấy thông tin forum
export async function Forum(req, res) {
  try {
    const result = await forum(req.query);
    
    if (result.success) {
      return res.status(200).json({ message: result.data });  // Trả về dữ liệu khi thành công
    } else {
      return res.status(400).json({
        success: false,
        errorCode: result.errorCode,
        message: result.message
      });  // Trả về lỗi nếu có
    }
  } catch (error) {
    console.error('Error in Forum:', error);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while fetching forum details.',
      error: error.message
    });
  }
}
