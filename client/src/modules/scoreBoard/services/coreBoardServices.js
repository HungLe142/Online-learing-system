import { getScore } from '../../../hooks/useStudent';

// Function to transform API data to the desired format
const transformCourseData = (apiData) => {
    //console.log("Data of raw score:", apiData)
    return apiData.map(course => ({
        courseName: course.courseName,
        assignment: course.assnScore,
        quiz: course.projScore, // Assuming projScore is equivalent to quiz
        midterm: course.midScore,
        finalExam: course.finalScore,
        credit: 3 // Assigning a default value for credit as it's not in the API data
    }));
};

const getCourseData = async (studentId, token) => {
    try {
        // Gọi API để lấy dữ liệu
        const apiData = await getScore(studentId, token);

        if (!Array.isArray(apiData)) {
            throw new TypeError('API data is not an array');
        }

        // Transform API data to the desired format
        const grades = transformCourseData(apiData);

        // Return the transformed data
        return grades;

    } catch (error) {
        console.error('Error processing course data:', error);
        throw error;
    }
};

export default getCourseData
