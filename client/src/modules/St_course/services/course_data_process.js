import { getClasses } from '../../../hooks/useStudent';

const courseDataProcess = async (studentId) => {
  try {
    // Gọi API để lấy dữ liệu
    const apiData = await getClasses(studentId);

    // Kiểm tra dữ liệu trả về từ API
    console.log('API Data:', apiData);

    // Xử lý dữ liệu trả về
    const imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/dd5df51015a5082899b4fd3815d4531f4859e5af572d8cccbb0748bb580019a7?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7";
    const instructorImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/f74733f6d18a33e68478744ebca07adcdd1065684e56984388baba9a3cee1c38?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7";

    // Kiểm tra nếu apiData là một mảng
    // if (!Array.isArray(apiData)) {
    //   throw new TypeError('API data is not an array');
    // }
    let data = apiData.message
    const processedData = data.map(item => ({
      imageUrl: imageUrl,
      title: item.ten_lop,
      instructorImage: instructorImage,
      instructorName: item.GiangVien.User.ho_ten,
      currentLesson: 0, // Bạn có thể cập nhật giá trị này nếu có thông tin
      totalLessons: 0 // Bạn có thể cập nhật giá trị này nếu có thông tin
    }));

    return processedData;
  } catch (error) {
    console.error('Error processing course data:', error);
    throw error;
  }
};

export default courseDataProcess;
