import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LessonCard from "../components/LessonCard";
import ContentCard from "../components/ContentCard";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import  icons_back from "../../../assets/icons/icon_back.png";
import {getRawClasses, getRawExercise, generate_class_UI_data, generate_Material_UI_data, uploadMaterial, removeMaterial} from "../services/courseContentService";
import { useSelector } from 'react-redux';
import { useAuth } from "../../../hooks/useAuth";

// This page is currently used for both student and teacher
export default function CourseContent() {
  let have_id = false;
  const { id } = useParams();
  // Check if the id is null or undefined 
  if (!id) { 
    console.log('ID is null or undefined'); 
  } else { 
    console.log('ID:', id); 
    have_id = true;
  }
  
  
  const {user, token} = useAuth();
  const [lessons, setLessons] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [contentCards, setContentCards] = useState([]);

  const [lectureName, setLecName] = useState(null);
  const [subName, setSubName] = useState(null);
  const [classID, setClassID] = useState(null);

  // For entries in uploading document
  const [materialName, setMaterialName] = useState('');
  const [materialLink, setMaterialLink] = useState('');

  // For UX:
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const fetchClasses = async () => {
        try {
            const classes = await getRawClasses(user.user_id, token);
            const formattedClasses = generate_class_UI_data(classes, user);
            setLessons(formattedClasses);

            if (classes.length > 0 && !have_id) {
                setLecName(classes[0].GiangVien.User.ho_ten)
                setSubName(classes[0].ten_lop)
                setClassID(classes[0].lop_id)
                const classMaterials = await getRawExercise(token, classes[0].lop_id);
                const formattedMaterials = generate_Material_UI_data(classMaterials);
                setMaterials(classMaterials);
                setContentCards(formattedMaterials); // Use setContentCards to update state
               
            }
            else if(classes.length > 0 && have_id){
              for (const classItem of classes) {
                if (classItem.lop_id === id) {
                    setLecName(user.user_id.startsWith('SV') ? classItem.GiangVien.User.ho_ten : user.ho_ten);
                    setSubName(classItem.ten_lop)
                    setClassID(classItem.lop_id)
                    break;
                }
              }

              const classMaterials = await getRawExercise(token, id);
              const formattedMaterials = generate_Material_UI_data(classMaterials);
              setMaterials(classMaterials);
              setContentCards(formattedMaterials); // Use setContentCards to update state
              
            }

        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };

    fetchClasses();
  }, [token]);

  const handleLessonClick = async (lop_id, tenGV, tenMon, maLop) => {
    try {
        setIsLoading(true);
        const classMaterials = await getRawExercise(token, lop_id);
        //console.log("Get material: ", classMaterials)
        setMaterials(classMaterials);
        const formattedMaterials = generate_Material_UI_data(classMaterials);
        setContentCards(formattedMaterials);
        //console.log("UI material: ", contentCards)
        setLecName(tenGV)
        setSubName(tenMon)
        setClassID(maLop)
        setIsLoading(false);

    } catch (error) {
        console.error('Error fetching materials:', error);
        setIsLoading(false);
    }
  };
  const handleUpload = async () => {
    try {
      setIsLoading(true);
      const response = await uploadMaterial(token, materialName, materialLink, classID);
      console.log('Upload successful:', response);
      alert('Thành Công');
      window.location.reload(); // Reload the page if the operation was successful
    } catch (error) {
      console.error('Failed to upload material:', error);
      alert('Thất bại');
      setIsLoading(false);
    }
  };
  const handleRemoveMaterial = async (materialName) => {
    try {
      setIsLoading(true);
      const response = await removeMaterial(token, materialName, classID);
      console.log('Remove successful:', response);
      alert('Thành Công');
      window.location.reload();
    } catch (error) {
      console.error('Failed to remove material:', error);
      alert('Thất bại');
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-hidden pl-8 bg-white max-md:pl-5 relative ${isLoading ? 'pointer-events-none opacity-50' : ''}">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 w-full max-md:mt-8 max-md:max-w-full">
            <Link to={ENDPOINTS.USER.HOME} className="flex shrink-0 bg-teal-400 h-[50px] w-[50px] items-center justify-center">
            <img src={icons_back} alt="" className="h-10 w-10"/>
            </Link>
            <div className="self-start mt-36 text-3xl font-semibold text-slate-800 max-md:mt-10 max-md:ml-2.5">
              Diễn đàn môn học
            </div>
            <div className="px-16 py-5 mt-5 text-base rounded-xl bg-amber-500 bg-opacity-30 text-slate-800 max-md:px-5 max-md:max-w-full">
              Tên diễn đàn
            </div>
            <div className="self-start mt-5 text-3xl font-semibold text-slate-800 max-md:ml-2.5">
              Lớp học
            </div>
            {lessons.map((lesson, index) => (
              <LessonCard 
                key={index} 
                {...lesson} 
                onClick={() => handleLessonClick(lesson.lop_id, lesson.lec_name, lesson.class_name, lesson.class_id)}
              />
            ))}

          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-1.5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between px-16 py-7 text-white bg-sky-950 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-5xl">{subName}</div>
                <div className="self-start mt-1.5 text-2xl">{classID}</div>
              </div>
              <div className="self-end mt-16 text-2xl max-md:mt-10">
              {lectureName}
              </div>
            </div>
            <div className="flex flex-col items-start px-3.5 pt-9 pb-16 mt-3.5 w-full bg-blue-300 bg-blend-normal max-md:mr-1.5 max-md:max-w-full">
            
            <div className="self-stretch mt-7 ml-5 max-md:max-w-full overflow-x-auto">
              <div className="flex gap-5 max-md:flex-col">
                {contentCards.map((card, index) => (
                  <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <ContentCard
                      imageUrl={card.imageUrl}
                      title={card.title}
                      url={card.url}
                      onClose={() => handleRemoveMaterial(card.title)}
                    />
                  </div>
                ))}
              </div>
            </div>
        
            {user.role !== 'student' && (    
              <div className="mt-12 ml-9 text-3xl text-black max-md:mt-10 max-md:ml-2.5">
                {user.user_id.startsWith('SV') ? 'Nộp bài' : 'Đăng tải tài liệu'}
              </div>
            )}

            {user.role !== 'student' && (    
              <div className="mt-5 max-w-full w-[662px]">
                  <div className="flex gap-5 max-md:flex-col">
                    {[1].map((index) => (
                      <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start px-4 pt-4 pb-7 mx-auto w-full text-2xl font-medium bg-white rounded-3xl shadow-[0px_19px_47px_rgba(47,50,125,0.1)] max-md:mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/814d904cbf8b0127bfeb9ed592c731c9807ae1a3045dc990c88bf615d23d7f3a?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                            alt="Exercise content"
                            className="object-contain self-stretch w-full rounded-3xl aspect-[1.34]"
                          />
                          <div className="flex gap-4 mt-7 text-xl tracking-wide leading-relaxed text-gray-500 whitespace-nowrap">
                            <img
                              loading="lazy"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-uPMTH57wswC6fx_GIFiiXSfEODTSMAoBA&s"
                              alt=""
                              className="object-contain shrink-0 w-8 aspect-square"
                            />
                            <div className="self-start">Upload</div>
                          </div>
                          <div className="flex flex-col gap-4 mt-8 w-full text-center text-slate-800">
                            <input
                              type="text"
                              placeholder="Tên tài liệu"
                              value={materialName}
                              onChange={(e) => setMaterialName(e.target.value)}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                            <input
                              type="text"
                              placeholder="Link tài liệu"
                              value={materialLink}
                              onChange={(e) => setMaterialLink(e.target.value)}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          <button 
                            onClick={handleUpload}
                            className="w-full px-5 py-7 mt-14 font-bold tracking-wide text-center text-white bg-teal-400 rounded-2xl max-md:mt-10"
                          >
                            Upload
                          </button>

                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            )}
            
              <div className="flex flex-col items-start self-center px-16 py-11 w-full rounded-2xl bg-amber-500 bg-opacity-30 max-w-[1309px] mt-[603px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-start text-2xl font-semibold text-gray-800">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9ea5ff8acb870bc15124dbf3d8387276b0a3f0a3038676f7c3443133bb248b?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                    alt="Instructor avatar"
                    className="object-contain shrink-0 rounded-none aspect-square w-[71px]"
                  />
                  <div className="flex flex-col">
                    <div>{lectureName}</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4383e6ed47c9477218aeb2c12171c4dfbad7c41203b36d6c7861839591e0be2b?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                      alt="Rating"
                      className="object-contain mt-2 max-w-full aspect-[5.92] w-[130px]"
                    />
                  </div>
                </div>
                <div className="mt-9 text-lg tracking-wide text-gray-500">
                  Nhận xét của giảng viên
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}