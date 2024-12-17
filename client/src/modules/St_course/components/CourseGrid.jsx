import * as React from "react";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import courseDataProcess from "../services/course_data_process";
import { useSelector } from 'react-redux';
import { useAuth } from "../../../hooks/useAuth";
function CourseGrid() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

/********************* Fix here !***************************/
  //const user = useSelector(state => state.auth.user);
  //const token = useSelector(state => state.auth.token);
  //const {user} = useAuth();
  let studentId = 'SV001';
  let token = null;

/********************* Fix here !***************************/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await courseDataProcess(studentId, token);
        setCourseData(data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-end px-16 py-36 w-full bg-blue-300 bg-blend-normal max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="-mb-8 w-full max-w-[1687px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {courseData.map((course, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseGrid;
