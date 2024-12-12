import React from 'react';

const CourseCard = ({ course, isEnrolled, onToggleEnrollment }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:translate-y-[-5px]" role="listitem">
      <img src={course.image} alt="Course thumbnail" className="w-full aspect-video object-cover" />
      <div className="p-6">
        <div className="text-[#696984] text-sm text-right mb-4">{course.credits}</div>
        <h3 className="text-[#252641] text-xl mb-4">{course.title}</h3>
        <p className="text-[#696984] mb-6">{course.schedule}</p>
        <div className="flex items-center gap-4 mb-6">
          <img src={course.instructor.image} alt="" className="w-11 h-11 rounded-full object-cover" />
          <span className="text-[#696984]">{course.instructor.name}</span>
        </div>
        <button
          onClick={() => onToggleEnrollment(course.id)}
          className="w-full py-3 rounded-full bg-[#49BBBD] text-white text-lg font-medium hover:bg-[#3da7a9] focus:outline-none focus:ring-3 focus:ring-[#2d8a8c]"
        >
          {isEnrolled ? 'Unsubmit' : 'Submit'}
        </button>
      </div>
    </article>
  );
};

export default CourseCard;
