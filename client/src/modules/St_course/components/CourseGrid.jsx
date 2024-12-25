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
  const {user, token} = useAuth();
  const  user_id = user.user_id;

/********************* Fix here !***************************/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await courseDataProcess(user_id, token, user);
        setCourseData(data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user_id]);

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
