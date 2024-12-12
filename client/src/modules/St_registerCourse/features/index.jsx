import React, { useState } from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import CourseGrid from '../components/CourseGrid';

const CourseRegisterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState(new Set());

  const courseData = [
    {
      id: 1,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/870e930f8418d3a4155a3c19eaaeba23460cd73a3920d85bbf43d3e51237dba6?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104',
      credits: 'Số tín chỉ',
      title: 'Tên môn học- Mã môn học',
      schedule: 'Thứ - Tiết - lớp',
      instructor: {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a803a0222ed4e85c0683ca07ff37cbacf9dd13268e139899bbe398823fe3d4f8?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104',
        name: 'Tên giảng viên',
      },
    },
    // Add other courses here...
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleToggleEnrollment = (courseId) => {
    setEnrolledCourses((prev) => {
      const updated = new Set(prev);
      if (updated.has(courseId)) {
        updated.delete(courseId);
      } else {
        updated.add(courseId);
      }
      return updated;
    });
  };

  const filteredCourses = courseData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Header />
      <SearchSection onSearch={handleSearch} />
      <section className="bg-[#9DCCFF] py-10 px-20">
        <h2 className="text-2xl font-semibold text-center mb-10">Select your course</h2>
        <CourseGrid
          courses={filteredCourses}
          enrolledCourses={enrolledCourses}
          onToggleEnrollment={handleToggleEnrollment}
        />
      </section>
      <section className="py-10 px-20">
        <h2 className="text-2xl font-semibold text-center mb-10">Your course</h2>
        <CourseGrid
          courses={filteredCourses.filter((course) => enrolledCourses.has(course.id))}
          enrolledCourses={enrolledCourses}
          onToggleEnrollment={handleToggleEnrollment}
        />
      </section>
    </main>
  );
};

export default CourseRegisterPage;
