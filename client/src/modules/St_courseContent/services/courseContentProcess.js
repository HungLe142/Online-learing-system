import { getClasses, getClassMaterials } from '../../../hooks/useStudent';

export const getRawExercise = async (token, class_id) => {
    return getClassMaterials(token, class_id);
};

export const getRawClasses = async (token) => {
    return getClasses(null, token);
};

export const generate_class_UI_data = (classes) => {
    //const bgColors = ["bg-teal-400", "bg-amber-500 bg-opacity-30", "bg-blue-300 bg-opacity-30", "bg-red-400 bg-opacity-30"];
    return classes.map((item, index) => ({
        title: item.ten_lop,
        //bgColor: bgColors[index % bgColors.length],
        bgColor: "bg-amber-500 bg-opacity-30",
        lop_id: item.lop_id,
        lec_name: item.GiangVien.User.ho_ten,
        class_name: item.ten_lop,
        class_id: item.lop_id
    }));
};

export const generate_Material_UI_data = (materials) => {
    return materials.map(material => ({
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/814d904cbf8b0127bfeb9ed592c731c9807ae1a3045dc990c88bf615d23d7f3a?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7",
        title: material.ten_tai_nguyen,
        url: material.url
    }));
};
