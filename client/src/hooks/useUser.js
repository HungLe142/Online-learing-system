import axios from 'axios';
import APIEndPoint from "../constants/apiEndpoints";




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



export const getTimeTable = async (studentId, lecturerId) => {
  const serverUrl = APIEndPoint.SERVER_URL;

  if (lecturerId == null && studentId != null) {
    try {
      const response = await axios.get(`${serverUrl}/student/courses`, {
        params: {
          studentID: studentId,
          semesterID: 'HK241',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw error;
    }
  } else if (studentId == null && lecturerId != null) {
    try {
      const response = await axios.get(`${serverUrl}/lecturer/courses`, {
        params: {
          lecturerID: lecturerId,
          semesterID: 'HK241',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching classes:', error);
      throw error;
    }
  } else {
    throw new Error('Either studentId or lecturerId must be provided');
  }
};


//http://localhost:3000/lecturer/courses?lecturerID=GV001&semesterID=HK241
//http://localhost:3000/student/courses?studentID=SV010&semesterID=HK241