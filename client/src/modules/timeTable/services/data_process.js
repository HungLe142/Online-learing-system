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
    const apiData = await getTimeTable(studentId, lecturerId, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("API Data: ", apiData);

    // Kiểm tra dữ liệu trả về từ API
    const courses = apiData.message;  // Chỉ cần lấy apiData vì getTimeTable đã trả về data

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





//export const getTimeTable = async (studentId) => {
  
      // http://localhost:3001/lecturer/courses?lecturerID=GV001&semesterID=HK241
      // http://localhost:3001/student/courses?studentID=SV010&semesterID=HK241
      // APIEndPoint.SERVER_URL = 'http://localhost:3001'
      /*
        Response from API (get): [
                              {
                                  "lop_id": "CHE002_1",
                                  "ma_mon_hoc": "CHE002",
                                  "ten_mon_hoc": "Công Nghệ Hóa Dầu",
                                  "so_tin_chi": 4,
                                  "ten_giang_vien": "Hoàng Mai Lan",
                                  "phong_hoc": "A1-109",
                                  "thu": 7,
                                  "tiet_bat_dau": 9,
                                  "tiet_ket_thuc": 13
                              }
                            ]
        Exxpected ouput:
        const [scheduleData, setScheduleData] = useState({
            '9:00 - 10:00': {
              monday: 'Geography',
              tuesday: 'Math',
              wednesday: '',
              thursday: 'Physics',
              friday: ''
            },
            '10:00 - 11:00': {
              monday: 'History',
              tuesday: 'Chemistry',
              wednesday: 'Biology',
              thursday: '',
              friday: 'Art'
            },
        });  

        + The time: '9:00 - 10:00' is infered from tiet_bat_dau and tiet_ket_thuc, ex: tiet_bat_dau = 1 -> 9:00 - 10:00, we just need a static table for mapping (tiet, time)
        + 'monday', 'tuesday' are thu, we translate from number to string, ex: 2 -> monday
        +  'Geography', 'Math' are ten_mon_hoc
        + Help me transform the raw data to the expected one
      */


//};