/*
    To do: Handle Get request, return:
        + All studying material in a a class
        + Return Score of student
        + Returrn list of class that the student is participating in this semester 
    
        Back log: 
        + Create a DANG_KY_MON_HOC tuple (handle post request)
*/
const { Student, ThamGia, Lop, GiangVien, User } = require("../models/studentModel");

//Returrn list of class that the student is participating in this semester 
/*
    data push:
                            [
                                {
                                    "tham_gia_id": 1,
                                    "ma_sinh_vien": "SV001",
                                    "lop_id": 1,
                                    "diem_id": 1,
                                    "Lop": {
                                        "lop_id": 1,
                                        "ten_lop": "Class CS101 - HK_241",
                                        "ma_mon_hoc": "CS101",
                                        "hoc_ky": "HK_241",
                                        "ma_giang_vien": "GV001",
                                        "GiangVien": {
                                            "ma_giang_vien": "GV001",
                                            "user_id": 11,
                                            "chuyen_nganh": "Information technology",
                                            "khoa_id": 1,
                                            "User": {
                                                "user_id": 11,
                                                "email": "gv1@example.com",
                                                "so_dien_thoai": "0123456780",
                                                "ho_ten": "Nguyen Van Lam",
                                                "ngay_sinh": "1980-01-01",
                                                "gioi_tinh": "Male",
                                                "dia_chi": null
                                            }
                                        }
                                    }
                                }
                            ]
*/ 
exports.getClasses = async (req, res) => {
    try {
        const { student_id } = req.params;

        const classes = await ThamGia.findAll({
            where: { ma_sinh_vien: student_id },
            include: [{
                model: Lop,
                attributes: ['lop_id', 'ten_lop', 'ma_mon_hoc', 'hoc_ky', 'ma_giang_vien'],
                include: [{
                    model: GiangVien,
                    attributes: ['ma_giang_vien', 'user_id', 'chuyen_nganh', 'khoa_id'],
                    include: [{
                        model: User,
                        attributes: ['user_id', 'email', 'so_dien_thoai', 'ho_ten', 'ngay_sinh', 'gioi_tinh', 'dia_chi']
                    }]
                }]
            }]
        });

        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message || "An unexpected error occurred" });
    }
};



// Return All studying material in a a class
exports.getMaterials = async (req, res) => {

};

// Return Score of student
exports.getScores = async (req, res) => {

};

