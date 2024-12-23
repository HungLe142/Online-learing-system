import { classResources, getScore, updateScore, forum } from '../models/ClassModel.js';

// Controller lấy tài nguyên lớp học
export async function ClassResources(req, res) {
  try {
      const result = await classResources(req.query);
      return res.status(200).json(result);  // Trả về dữ liệu khi thành công
  
  } catch (error) {
    console.error('Error in ClassResources:', error);
    return res.status(500).json({ error: error.message });
  }
}

// Controller cập nhật điểm
export async function UpdateScore(req, res) {
  try {
    const result = await updateScore(req.body);
    return res.status(200).json({ message: 'OK' });  // Trả về thông báo thành công
  
  } catch (error) {
    console.error('Error in UpdateScore:', error);
    return res.status(500).json({ error: error.message });
  }
}

// Controller lấy điểm
export async function GetScore(req, res) {
  try {
    const result = await getScore(req.query);
    return res.status(200).json(result);  // Trả về dữ liệu khi thành công
  } catch (error) {
    console.error('Error in GetScore:', error);
    return res.status(500).json({ error: error.message });
  }
}

// Controller lấy thông tin forum
export async function Forum(req, res) {
  try {
    const result = await forum(req.query);
    return res.status(200).json(result);  // Trả về dữ liệu khi thành công
    
  } catch (error) {
    console.error('Error in Forum:', error);
    return res.status(500).json({ error: error.message });
  }
}
