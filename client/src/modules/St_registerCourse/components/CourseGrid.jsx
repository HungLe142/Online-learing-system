import React from 'react';
import CourseCard from './CourseCard';

const CourseGrid = ({ courses, enrolledCourses, onToggleEnrollment }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isEnrolled={enrolledCourses.has(course.id)}
          onToggleEnrollment={onToggleEnrollment}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
