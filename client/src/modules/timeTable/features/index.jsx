
// import React, { useState, useEffect } from 'react';

// function Timetable() {
//   const [scheduleData, setScheduleData] = useState({
//     '9:00 - 10:00': {
//       monday: 'Geography',
//       tuesday: 'Math',
//       wednesday: '',
//       thursday: 'Physics',
//       friday: ''
//     },
//     '10:00 - 11:00': {
//       monday: 'History',
//       tuesday: 'Chemistry',
//       wednesday: 'Biology',
//       thursday: '',
//       friday: 'Art'
//     },
//     '11:00 - 12:00': {
//       monday: 'English',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '12:00 - 13:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '13:00 - 14:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '14:00 - 15:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '15:00 - 16:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '16:00 - 17:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//   });

//   const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

//   const getCurrentWeek = () => {
//     const currentDate = new Date();
//     let currentDayIndex = currentDate.getDay();
    
//     if (currentDayIndex === 0) {
//       currentDayIndex = 6; // If Sunday, set to Saturday
//     } else {
//       currentDayIndex -= 1;
//     }

//     const currentDayName = daysOfWeek[currentDayIndex];

//     const startOfWeek = new Date(currentDate);
//     startOfWeek.setDate(currentDate.getDate() - currentDayIndex);

//     const endOfWeek = new Date(startOfWeek);
//     endOfWeek.setDate(startOfWeek.getDate() + 4);

//     return {
//       startOfWeek,
//       endOfWeek,
//       currentDayName
//     };
//   };

//   useEffect(() => {
//     const { startOfWeek, endOfWeek, currentDayName } = getCurrentWeek();

//     // Format the dates to display in the header
//     const startDateFormatted = startOfWeek.toLocaleDateString();
//     const endDateFormatted = endOfWeek.toLocaleDateString();
//     const weekDisplay = document.querySelector('#week');
//     if (weekDisplay) {
//       weekDisplay.textContent = `Week: ${startDateFormatted} - ${endDateFormatted}`;
//     }

//     // Update the header cells with the "today" class
//     const thElements = document.querySelectorAll('th');
//     thElements.forEach((th, index) => {
//       if (index > 0 && daysOfWeek[index - 1] === currentDayName) {
//         th.classList.add('today');
//       } else {
//         th.classList.remove('today');
//       }
//     });
//   }, []);

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <header className="bg-[#13334D] flex items-center justify-between p-7 text-white">
//         <img 
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2827585117db5240019bac32cf26e9b57fa087d4bea4a12b923e295187fe68?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
//           alt="School Logo" 
//           className="w-12 h-12 object-contain"
//         />
//         <h1 className="text-3xl font-semibold">TIMETABLE</h1>
//         <div className="flex items-center gap-2">
//           <p className="text-lg">Học kì 1</p>
//         </div>
//       </header>

//       <main className="bg-[#9DCCFF] flex-1 p-16 pb-52">
//         <div id="week" className="text-lg font-bold bg-[#E6FEFF] text-[#24B0C9] p-3 text-center mb-5 rounded-md shadow-md"></div>

//         <table className="w-full table-auto border-collapse bg-white">
//           <thead>
//             <tr>
//               <th className="p-3 text-center">Time</th>
//               <th className="p-3 text-center">Monday</th>
//               <th className="p-3 text-center">Tuesday</th>
//               <th className="p-3 text-center">Wednesday</th>
//               <th className="p-3 text-center">Thursday</th>
//               <th className="p-3 text-center">Friday</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(scheduleData).map((time, index) => (
//               <tr key={index}>
//                 <td className="p-3 text-center">{time}</td>
//                 {daysOfWeek.map((day, dayIndex) => (
//                   <td key={dayIndex} className={`p-3 text-center ${day}`}>
//                     {scheduleData[time][day] || ''}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

// export default Timetable;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ENDPOINTS } from '../../../routes/endPoints';
// function Timetable() {
//   const [scheduleData, setScheduleData] = useState({
//     '9:00 - 10:00': {
//       monday: 'Geography',
//       tuesday: 'Math',
//       wednesday: '',
//       thursday: 'Physics',
//       friday: ''
//     },
//     '10:00 - 11:00': {
//       monday: 'History',
//       tuesday: 'Chemistry',
//       wednesday: 'Biology',
//       thursday: '',
//       friday: 'Art'
//     },
//     '11:00 - 12:00': {
//       monday: 'English',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '12:00 - 13:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '13:00 - 14:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '14:00 - 15:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '15:00 - 16:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//     '16:00 - 17:00': {
//       monday: '',
//       tuesday: '',
//       wednesday: '',
//       thursday: '',
//       friday: ''
//     },
//   });

//   const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

//   const getCurrentWeek = () => {
//     const currentDate = new Date();
//     let currentDayIndex = currentDate.getDay();
    
//     if (currentDayIndex === 0) {
//       currentDayIndex = 6; // If Sunday, set to Saturday
//     } else {
//       currentDayIndex -= 1;
//     }

//     const currentDayName = daysOfWeek[currentDayIndex];

//     const startOfWeek = new Date(currentDate);
//     startOfWeek.setDate(currentDate.getDate() - currentDayIndex);

//     const endOfWeek = new Date(startOfWeek);
//     endOfWeek.setDate(startOfWeek.getDate() + 4);

//     return {
//       startOfWeek,
//       endOfWeek,
//       currentDayName
//     };
//   };

//   const [todayClass, setTodayClass] = useState(null);  // State to store today class

//   useEffect(() => {
//     const { startOfWeek, endOfWeek, currentDayName } = getCurrentWeek();

//     // Format the dates to display in the header
//     const startDateFormatted = startOfWeek.toLocaleDateString();
//     const endDateFormatted = endOfWeek.toLocaleDateString();
//     const weekDisplay = document.querySelector('#week');
//     if (weekDisplay) {
//       weekDisplay.textContent = `Week: ${startDateFormatted} - ${endDateFormatted}`;
//     }

//     // Set the "today" class for the correct day
//     setTodayClass(currentDayName); // Set the current day as "today"
//   }, []);

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <header className="bg-[#13334D] flex items-center justify-between p-7 text-white">
//         <Link to={ENDPOINTS.USER.HOME} className="flex items-center space-x-2">
//         <img 
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2827585117db5240019bac32cf26e9b57fa087d4bea4a12b923e295187fe68?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
//           alt="School Logo" 
//           className="w-12 h-12 object-contain"
//         />
//         </Link>
//         <h1 className="text-3xl font-semibold">TIMETABLE</h1>
//         <div className="flex items-center gap-2">
//           <p className="text-lg">Học kì 1</p>
//         </div>
//       </header>

//       <main className="bg-[#9DCCFF] flex-1 p-16 pb-52">
//         <div id="week" className="text-lg font-bold bg-[#E6FEFF] text-[#24B0C9] p-3 text-center mb-5 rounded-md shadow-md"></div>

//         <table className="w-full table-auto border-collapse bg-white">
//           <thead>
//             <tr>
//               <th className={`p-3 text-center ${todayClass === 'monday' ? 'bg-red-500 text-white' : ''}`}>Time</th>
//               <th className={`p-3 text-center ${todayClass === 'monday' ? 'bg-red-500 text-white' : ''}`}>Monday</th>
//               <th className={`p-3 text-center ${todayClass === 'tuesday' ? 'bg-red-500 text-white' : ''}`}>Tuesday</th>
//               <th className={`p-3 text-center ${todayClass === 'wednesday' ? 'bg-red-500 text-white' : ''}`}>Wednesday</th>
//               <th className={`p-3 text-center ${todayClass === 'thursday' ? 'bg-red-500 text-white' : ''}`}>Thursday</th>
//               <th className={`p-3 text-center ${todayClass === 'friday' ? 'bg-red-500 text-white' : ''}`}>Friday</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(scheduleData).map((time, index) => (
//               <tr key={index}>
//                 <td className="p-3 text-center">{time}</td>
//                 {daysOfWeek.map((day, dayIndex) => (
//                   <td key={dayIndex} className={`p-3 text-center ${todayClass === day ? 'bg-red-100' : ''}`}>
//                     {scheduleData[time][day] || ''}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

// export default Timetable;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../../../routes/endPoints';
import time_table_process from "../services/data_process";
import { useSelector } from 'react-redux';

function Timetable() {

  const user = useSelector(state => state.auth.user);

  // let studentId = null;
  // let lecturerId = null;
  let studentId = 'SV001';
  let lecturerId = null;

  // Fix here !
  // if(user.role == 'teacher')
  //   lecturerId = setCredentials.user.user_id
  // else if(user.role == 'student')
  //   studentId = setCredentials.user.user_id
  
  

  
  const [scheduleData, setScheduleData] = useState({});
  const [todayClass, setTodayClass] = useState(null);  // State to store today class


  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  const getCurrentWeek = () => {
    const currentDate = new Date();
    let currentDayIndex = currentDate.getDay();
    
    if (currentDayIndex === 0) {
      currentDayIndex = 6; // If Sunday, set to Saturday
    } else {
      currentDayIndex -= 1;
    }

    const currentDayName = daysOfWeek[currentDayIndex];

    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDayIndex);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 4);

    return {
      startOfWeek,
      endOfWeek,
      currentDayName
    };
  };

  // Gọi API để lấy dữ liệu lịch trình và cập nhật state
  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const timetable = await time_table_process(studentId, lecturerId); 
        setScheduleData(timetable); // Cập nhật state với dữ liệu lịch trình
        console.log('Time table data: ', timetable);
      } catch (error) { 
        console.error('Error fetching timetable data:', error); 
      }
    };

    fetchScheduleData();

    const { startOfWeek, endOfWeek, currentDayName } = getCurrentWeek();

    // Format the dates to display in the header
    const startDateFormatted = startOfWeek.toLocaleDateString();
    const endDateFormatted = endOfWeek.toLocaleDateString();
    const weekDisplay = document.querySelector('#week');
    if (weekDisplay) {
      weekDisplay.textContent = `Week: ${startDateFormatted} - ${endDateFormatted}`;
    }

    // Set the "today" class for the correct day
    setTodayClass(currentDayName); // Set the current day as "today"
  }, []); // Chạy một lần khi component được tải lên

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-[#13334D] flex items-center justify-between p-7 text-white">
        <Link to={ENDPOINTS.USER.HOME} className="flex items-center space-x-2">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2827585117db5240019bac32cf26e9b57fa087d4bea4a12b923e295187fe68?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
          alt="School Logo" 
          className="w-12 h-12 object-contain"
        />
        </Link>
        <h1 className="text-3xl font-semibold">TIMETABLE</h1>
        <div className="flex items-center gap-2">
          <p className="text-lg">Học kì 1</p>
        </div>
      </header>

      <main className="bg-[#9DCCFF] flex-1 p-16 pb-52">
        <div id="week" className="text-lg font-bold bg-[#E6FEFF] text-[#24B0C9] p-3 text-center mb-5 rounded-md shadow-md"></div>

        <table className="w-full table-auto border-collapse bg-white">
      <thead>
        <tr>
          <th className="p-3 text-center">Time</th>
          {daysOfWeek.map(day => (
            <th key={day} className={`p-3 text-center ${todayClass === day ? 'bg-red-500 text-white' : ''}`}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(scheduleData).map((time, index) => (
          <tr key={index}>
            <td className="p-3 text-center">{time}</td>
            {daysOfWeek.map((day, dayIndex) => (
              <td key={dayIndex} className={`p-3 text-center ${todayClass === day ? 'bg-red-100' : ''}`}>
                {scheduleData[time][day] || ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
      </main>
    </div>
  );
}

export default Timetable;
