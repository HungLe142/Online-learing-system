import axios from 'axios';
import { getTimeTable } from '../../../hooks/useUser';

const timeMapping = {
  1: '9:00',
  2: '10:00',
  3: '11:00',
  4: '13:00',
  5: '14:00',
  6: '15:00',
  7: '16:00',
  8: '17:00',
  9: '18:00',
  10: '19:00',
  11: '20:00',
};

const dayMapping = {
  2: 'monday',
  3: 'tuesday',
  4: 'wednesday',
  5: 'thursday',
  6: 'friday',
  7: 'saturday',
  1: 'sunday',
};

const time_table_process = async (studentId, lecturerId, token) => {
  try {
    // Gọi API để lấy dữ liệu, bao gồm header chứa token
    const apiData = await getTimeTable(studentId, lecturerId, token, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("API Data: ", apiData);

    // Kiểm tra dữ liệu trả về từ API
    const courses = apiData.message;  // Chỉ cần lấy apiData vì getTimeTable đã trả về data

    // Kiểm tra xem courses có phải là một mảng không
    if (!Array.isArray(courses)) {
      throw new TypeError('Courses is not an array');
    }

    // Khởi tạo cấu trúc dữ liệu ban đầu
    const scheduleData = {};

    // Duyệt qua từng khóa học và xây dựng lịch trình
    courses.forEach(course => {
      const startTime = timeMapping[course.tiet_bat_dau];
      const endTime = timeMapping[course.tiet_ket_thuc];
      const day = dayMapping[course.thu];
      const timeSlot = `${startTime} - ${endTime}`;

      if (!scheduleData[timeSlot]) {
        scheduleData[timeSlot] = {
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: '',
        };
      }

      scheduleData[timeSlot][day] = course.ten_mon_hoc;
    });

    return scheduleData;

  } catch (error) {
    console.error('Error processing course data:', error);
    throw error;
  }
};



export default time_table_process;
