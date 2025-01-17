﻿DROP TABLE IF EXISTS KHOA;
CREATE TABLE KHOA (
    khoa_id INT PRIMARY KEY, -- ID của khoa (khóa chính)
    ten_khoa VARCHAR(255) NOT NULL -- Tên của khoa (không được để trống)
);

DROP TABLE IF EXISTS HOC_KY;
CREATE TABLE HOC_KY (
    hoc_ky VARCHAR(20) PRIMARY KEY, -- Tên học kỳ (khóa chính)
    nam_hoc VARCHAR(20) NOT NULL, -- Năm học của học kỳ đó
    thoi_gian_bat_dau DATETIME,
    thoi_gian_ket_thuc DATETIME
);


DROP TABLE IF EXISTS [User];
CREATE TABLE [User] (
    user_id INT PRIMARY KEY, -- Tên hồ sơ đăng nhập
    email VARCHAR(255) UNIQUE, -- Email đăng nhập
    so_dien_thoai VARCHAR(20) NOT NULL, -- Số điện thoại liên lạc
    ho_ten VARCHAR(255) NOT NULL, -- Họ tên user
    ngay_sinh DATE, -- Ngày sinh user
    gioi_tinh VARCHAR(10) CHECK (gioi_tinh IN ('Male', 'Female')) NOT NULL, -- Giới tính của user
    dia_chi VARCHAR(255),
    mat_khau VARCHAR(255) NOT NULL, -- Mật khẩu của user
    quyen VARCHAR(20) CHECK (quyen IN ('Admin', 'Student', 'Lecture')) NOT NULL -- Phân loại người dùng
);

DROP TABLE IF EXISTS GIANG_VIEN;
CREATE TABLE GIANG_VIEN (
    ma_giang_vien VARCHAR(20) PRIMARY KEY, -- Mã giảng viên (khóa chính)
    user_id INT NOT NULL, -- ID của giảng viên trên hệ thống
    chuyen_nganh VARCHAR(255) NOT NULL, -- Chuyên ngành của giảng viên
    khoa_id INT NOT NULL, -- Khoa mà giảng viên thuộc
);

DROP TABLE IF EXISTS MON_HOC;
CREATE TABLE MON_HOC (
    ma_mon_hoc VARCHAR(20) PRIMARY KEY, -- Mã môn học (khóa chính)
    ten_mon_hoc VARCHAR(255) NOT NULL, -- Tên môn học (bắt buộc nhập)
    so_tin_chi INT NOT NULL, -- Số tín chỉ của môn học
    khoa_id INT NOT NULL, -- Khoa mà môn học thuộc (khóa ngoại đến bảng KHOA)
);

DROP TABLE IF EXISTS DIEM;
CREATE TABLE DIEM (
    diem_id INT PRIMARY KEY, -- ID của bảng điểm (khóa chính)
    diem_bt FLOAT NOT NULL, 
    diem_gk FLOAT NOT NULL, 
    diem_ck FLOAT NOT NULL, 
    diem_btl FLOAT NOT NULL, 
);

DROP TABLE IF EXISTS SINH_VIEN;
CREATE TABLE SINH_VIEN (
    ma_sinh_vien VARCHAR(20) PRIMARY KEY, -- Mã sinh viên
    user_id INT NOT NULL, -- ID của sinh viên trên hệ thống
    khoa_id INT NOT NULL, -- Khoa mà sinh viên thuộc
    --diem_id INT NOT NULL, -- Điểm của sinh viên
    GPA FLOAT, -- GPA của sinh viên
    so_tin_chi_tich_luy INT, -- Số tín chỉ tích lũy của sinh viên
   
);

DROP TABLE IF EXISTS LOP;
CREATE TABLE LOP (
    lop_id INT PRIMARY KEY, -- ID của lớp (khóa chính)
    ten_lop VARCHAR(255) NOT NULL, -- Tên lớp học (bắt buộc nhập)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- ID của môn học (liên kết với bảng MON_HOC)
    hoc_ky VARCHAR(20) NOT NULL, -- Học kỳ của lớp học (liên kết với bảng HOC_KY)
    ma_giang_vien VARCHAR(20) NOT NULL, -- Mã giảng viên phụ trách lớp học (liên kết với bảng GIANG_VIEN)
    
);
DROP TABLE IF EXISTS BUOI_HOC;
CREATE TABLE BUOI_HOC (
    lop_id INT NOT NULL, 
    tiet_ket_thuc VARCHAR(20) NOT NULL, 
    tiet_bat_dau VARCHAR(20) NOT NULL,
    phong_hoc VARCHAR(20) NOT NULL,
    thu VARCHAR(255) NOT NULL,
    PRIMARY KEY(lop_id, tiet_ket_thuc, thu),
    
);

DROP TABLE IF EXISTS THAM_GIA;
CREATE TABLE THAM_GIA (
    tham_gia_id INT PRIMARY KEY, -- Mã tham gia (khóa chính)
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (liên kết với bảng SINH_VIEN)
    lop_id INT NOT NULL, -- Mã lớp (liên kết với bảng LOP)
    diem_id INT UNIQUE NOT NULL, -- Điểm của môn học (bắt buộc nhập)
    CONSTRAINT unique_ma_sinh_vien_lop_id UNIQUE (ma_sinh_vien, lop_id) -- Ràng buộc để ma_sinh_vien và lop_id là duy nhất
);

DROP TABLE IF EXISTS DIEN_DAN;
CREATE TABLE DIEN_DAN (
    dien_dan_id INT PRIMARY KEY, -- ID của diễn đàn (khóa chính)
    lop_id INT NOT NULL, -- ID lớp mà diễn đàn thuộc (liên kết đến bảng LOP)
    tieu_de VARCHAR(255) NOT NULL, -- Tiêu đề của diễn đàn
    noi_dung TEXT NOT NULL, -- Nội dung của diễn đàn
 
);

DROP TABLE IF EXISTS TIN_NHAN;
CREATE TABLE TIN_NHAN (
    tin_nhan_id INT PRIMARY KEY, -- ID của tin nhắn (khóa chính)
    nguoi_gui_id INT NOT NULL, -- ID của người gửi tin nhắn (liên kết đến bảng USER)
    noi_dung TEXT NOT NULL, -- Nội dung của tin nhắn
    thoi_gian DATETIME NOT NULL, -- Thời gian gửi tin nhắn
    dien_dan_id INT
   
);

DROP TABLE IF EXISTS QUAN_TRI_VIEN;
CREATE TABLE QUAN_TRI_VIEN (
    ma_quan_tri VARCHAR(20) PRIMARY KEY, -- Mã của quản trị viên (khóa chính)
    user_id INT NOT NULL, -- ID của quản trị viên trên hệ thống (liên kết với bảng USER)
    
);

DROP TABLE IF EXISTS DANG_KY_MON_HOC;
CREATE TABLE DANG_KY_MON_HOC (
    dang_ky_id INT PRIMARY KEY, -- ID đăng ký (khóa chính)
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (liên kết với bảng SINH_VIEN)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học (liên kết với bảng MON_HOC)
    ngay_dang_ky DATETIME NOT NULL, -- Ngày sinh viên đăng ký môn học
    trang_thai_dang_ky VARCHAR(20) NOT NULL CHECK (trang_thai_dang_ky IN ('Thành công', 'Thiếu điều kiện', 'Đã hủy')), -- Trạng thái đăng ký
    
);
DROP TABLE IF EXISTS TAI_NGUYEN_LOP_HOC;
CREATE TABLE TAI_NGUYEN_LOP_HOC (
    lop_id INT NOT NULL, 
    ten NVARCHAR(255), 
    url NVARCHAR(2083),
    PRIMARY KEY(lop_id,ten)
);

--DROP TABLE IF EXISTS MON_SINH_VIEN_HOC;
--CREATE TABLE MON_SINH_VIEN_HOC (
   -- mon_sinh_vien_hoc_id INT PRIMARY KEY, -- ID đăng ký môn học của sinh viên (khóa chính)
   -- ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (khóa ngoại, liên kết với bảng SINH_VIEN)
   -- ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học (khóa ngoại, liên kết với bảng MON_HOC)
  --  hoc_ky VARCHAR(20) NOT NULL, -- Học kỳ mà sinh viên học môn này (khóa ngoại, liên kết với bảng HOC_KY)
   -- trang_thai_hoc VARCHAR(20) NOT NULL CHECK (trang_thai_hoc IN ('Đang học', 'Đã học', 'Chưa học')), -- Trạng thái học môn
  --  diem_id INT, -- Điểm của môn học (khóa ngoại, liên kết với bảng DIEM)
   
--);


SELECT * FROM [USER];




