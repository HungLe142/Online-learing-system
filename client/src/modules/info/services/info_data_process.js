import { getInfo } from '../../../hooks/useStudent';

const get_user_info = async (user_ID, token) => {
  try {
    // Gọi API để lấy dữ liệu
    const apiData = await getInfo(user_ID, token);

    // Kiểm tra dữ liệu trả về từ API
    console.log('API Data:', apiData);

    // Xử lý dữ liệu trả về
    const personalInfo = {
      name: apiData.ho_ten,
      birthDate: new Date(apiData.ngay_sinh).toLocaleDateString(),
      phoneNumber: apiData.so_dien_thoai,
      location: apiData.dia_chi,
      email: apiData.email || apiData.user_mail
    };

    return personalInfo;

  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};


export default get_user_info;
