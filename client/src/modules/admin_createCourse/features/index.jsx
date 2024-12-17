import React, { useState } from 'react';

const CreateCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    courseId: '',
    subjectName: '',
    date: '',
    time: '',
    instructor: '',
    maxStudents: ''
  });
  const [error, setError] = useState('');

  // Hàm xử lý thay đổi giá trị các input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value
    });
  };

  // Hàm xử lý khi người dùng gửi thông tin
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Kiểm tra các trường thông tin không được để trống
    if (!course.courseId || !course.subjectName || !course.date || !course.time || !course.instructor || !course.maxStudents) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    
    try {
      // Gửi dữ liệu về backend
      const response = await fetch('http://your-backend-url.com/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
      });

      if (response.ok) {
        const newCourse = await response.json();
        setCourses([...courses, newCourse]);
        setCourse({
          courseId: '',
          subjectName: '',
          date: '',
          time: '',
          instructor: '',
          maxStudents: ''
        });
        setError('');
      } else {
        setError('Có lỗi xảy ra khi tạo khóa học.');
      }
    } catch (err) {
      setError('Không thể kết nối với server.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo khóa học</h1>
      
      {/* Form nhập thông tin khóa học */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="courseId" className="block font-medium">Mã lớp học</label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            value={course.courseId}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subjectName" className="block font-medium">Tên môn học</label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={course.subjectName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block font-medium">Ngày</label>
          <input
            type="date"
            id="date"
            name="date"
            value={course.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-medium">Thời gian</label>
          <input
            type="time"
            id="time"
            name="time"
            value={course.time}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="instructor" className="block font-medium">Giảng viên</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={course.instructor}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="maxStudents" className="block font-medium">Số lượng sinh viên tối đa</label>
          <input
            type="number"
            id="maxStudents"
            name="maxStudents"
            value={course.maxStudents}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Hiển thị thông báo lỗi */}
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
        >
          Tạo khóa học
        </button>
      </form>

      {/* Danh sách khóa học */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Danh sách khóa học</h2>
        <ul className="space-y-2">
          {courses.map((course, index) => (
            <li key={index} className="p-4 border rounded-md">
              <p><strong>Mã lớp học:</strong> {course.courseId}</p>
              <p><strong>Tên môn học:</strong> {course.subjectName}</p>
              <p><strong>Ngày:</strong> {course.date}</p>
              <p><strong>Thời gian:</strong> {course.time}</p>
              <p><strong>Giảng viên:</strong> {course.instructor}</p>
              <p><strong>Số lượng sinh viên tối đa:</strong> {course.maxStudents}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateCoursePage;
