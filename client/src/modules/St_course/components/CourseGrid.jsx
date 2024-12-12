import * as React from "react";
import CourseCard from "./CourseCard";

const courseData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd5df51015a5082899b4fd3815d4531f4859e5af572d8cccbb0748bb580019a7?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    title: "AWS Certified Solutions Architect",
    instructorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/f74733f6d18a33e68478744ebca07adcdd1065684e56984388baba9a3cee1c38?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    instructorName: "Lina",
    currentLesson: 5,
    totalLessons: 7
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/593d4b933863cda3dd81bc0c43ba7d5f7c4857139aa0c5509884c558a702d9bb?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    title: "AWS Certified Solutions Architect",
    instructorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/f74733f6d18a33e68478744ebca07adcdd1065684e56984388baba9a3cee1c38?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    instructorName: "Lina",
    currentLesson: 5,
    totalLessons: 7
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/362f00e463af0e55e273d207cb12722df108814f1696b9cb095aab910ef422f4?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    title: "AWS Certified Solutions Architect",
    instructorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/f74733f6d18a33e68478744ebca07adcdd1065684e56984388baba9a3cee1c38?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
    instructorName: "Lina",
    currentLesson: 5,
    totalLessons: 7
  }
];

function CourseGrid() {
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