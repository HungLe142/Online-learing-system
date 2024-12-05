DROP TABLE IF EXISTS KHOA;
CREATE TABLE KHOA (
    khoa_id INT PRIMARY KEY, -- ID của khoa (khóa chính)
    ten_khoa VARCHAR(255) NOT NULL -- Tên của khoa (không được để trống)
);

DROP TABLE IF EXISTS HOC_KY;
CREATE TABLE HOC_KY (
    hoc_ky VARCHAR(20) PRIMARY KEY, -- Tên học kỳ (khóa chính)
    nam_hoc VARCHAR(20) NOT NULL -- Năm học của học kỳ đó
);


DROP TABLE IF EXISTS [User];
CREATE TABLE [User] (
    user_id INT PRIMARY KEY, -- Tên hồ sơ đăng nhập
    email VARCHAR(255) UNIQUE, -- Email đăng nhập
    so_dien_thoai VARCHAR(20) NOT NULL, -- Số điện thoại liên lạc
    ho_ten VARCHAR(255) NOT NULL, -- Họ tên user
    ngay_sinh DATE NOT NULL, -- Ngày sinh user
    gioi_tinh VARCHAR(10) CHECK (gioi_tinh IN ('Nam', 'Nữ', 'Khác')) NOT NULL, -- Giới tính của user
    mat_khau VARCHAR(255) NOT NULL, -- Mật khẩu của user
    quyen VARCHAR(20) CHECK (quyen IN ('Admin', 'Sinh viên', 'Giảng viên')) NOT NULL -- Phân loại người dùng
);

DROP TABLE IF EXISTS GIANG_VIEN;
CREATE TABLE GIANG_VIEN (
    ma_giang_vien VARCHAR(20) PRIMARY KEY, -- Mã giảng viên (khóa chính)
    user_id INT NOT NULL, -- ID của giảng viên trên hệ thống
    chuyen_nganh VARCHAR(255) NOT NULL, -- Chuyên ngành của giảng viên
    khoa_id INT NOT NULL, -- Khoa mà giảng viên thuộc
    CONSTRAINT FK_User_GiangVien FOREIGN KEY (user_id) REFERENCES [USER](user_id) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại liên kết với bảng USER
    CONSTRAINT FK_Khoa_GiangVien FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại liên kết với bảng KHOA
);

DROP TABLE IF EXISTS MON_HOC;
CREATE TABLE MON_HOC (
    ma_mon_hoc VARCHAR(20) PRIMARY KEY, -- Mã môn học (khóa chính)
    ten_mon_hoc VARCHAR(255) NOT NULL, -- Tên môn học (bắt buộc nhập)
    so_tin_chi INT NOT NULL, -- Số tín chỉ của môn học
    khoa_id INT NOT NULL, -- Khoa mà môn học thuộc (khóa ngoại đến bảng KHOA)
    CONSTRAINT FK_MonHoc_Khoa FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại liên kết với bảng KHOA
);

DROP TABLE IF EXISTS DIEM;
CREATE TABLE DIEM (
    diem_id INT PRIMARY KEY, -- ID của bảng điểm (khóa chính)
    phan_tram_diem VARCHAR(20) NOT NULL, -- Phần trăm các cột thành phần điểm
    so_diem FLOAT NOT NULL, -- Số điểm
    ten_thanh_phan VARCHAR(255) NOT NULL, -- Tên thành phần các cột điểm
    ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học của điểm (liên kết với bảng MON_HOC)
    CONSTRAINT FK_Diem_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến bảng MON_HOC
);

DROP TABLE IF EXISTS SINH_VIEN;
CREATE TABLE SINH_VIEN (
    ma_sinh_vien VARCHAR(20) PRIMARY KEY, -- Mã sinh viên
    user_id INT NOT NULL, -- ID của sinh viên trên hệ thống
    dia_chi VARCHAR(255) NOT NULL, -- Địa chỉ của sinh viên
    khoa_id INT NOT NULL, -- Khoa mà sinh viên thuộc
    diem_id INT NOT NULL, -- Điểm của sinh viên
    GPA FLOAT NOT NULL, -- GPA của sinh viên
    so_tin_chi_tich_luy INT NOT NULL, -- Số tín chỉ tích lũy của sinh viên
    CONSTRAINT FK_User FOREIGN KEY (user_id) REFERENCES [User](user_id) ON DELETE CASCADE ON UPDATE CASCADE, -- Khóa ngoại liên kết bảng User
    CONSTRAINT FK_Khoa FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id) ON DELETE CASCADE ON UPDATE CASCADE, -- Khóa ngoại liên kết bảng KHOA
    CONSTRAINT FK_Diem FOREIGN KEY (diem_id) REFERENCES DIEM(diem_id) ON DELETE CASCADE ON UPDATE CASCADE -- Khóa ngoại liên kết bảng DIEM
);

DROP TABLE IF EXISTS LOP;
CREATE TABLE LOP (
    lop_id INT PRIMARY KEY, -- ID của lớp (khóa chính)
    ten_lop VARCHAR(255) NOT NULL, -- Tên lớp học (bắt buộc nhập)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- ID của môn học (liên kết với bảng MON_HOC)
    hoc_ky VARCHAR(20) NOT NULL, -- Học kỳ của lớp học (liên kết với bảng HOC_KY)
    ma_giang_vien VARCHAR(20) NOT NULL, -- Mã giảng viên phụ trách lớp học (liên kết với bảng GIANG_VIEN)
    phong_hoc VARCHAR(20) NOT NULL, -- Phòng học (bắt buộc nhập)
    tiet VARCHAR(20) NOT NULL, -- Tiết học (bắt buộc nhập)
    thu VARCHAR(255) NOT NULL, -- Thứ học (bắt buộc nhập)
    CONSTRAINT FK_Lop_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến MON_HOC
    CONSTRAINT FK_Lop_HocKy FOREIGN KEY (hoc_ky) REFERENCES HOC_KY(hoc_ky) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến HOC_KY
    CONSTRAINT FK_Lop_GiangVien FOREIGN KEY (ma_giang_vien) REFERENCES GIANG_VIEN(ma_giang_vien) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến GIANG_VIEN
);

DROP TABLE IF EXISTS THAM_GIA;
CREATE TABLE THAM_GIA (
    tham_gia_id INT PRIMARY KEY, -- Mã tham gia (khóa chính)
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (liên kết với bảng SINH_VIEN)
    lop_id INT NOT NULL, -- Mã lớp (liên kết với bảng LOP)
    diem FLOAT NOT NULL, -- Điểm của môn học (bắt buộc nhập)
    CONSTRAINT FK_ThamGia_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến SINH_VIEN
    CONSTRAINT FK_ThamGia_Lop FOREIGN KEY (lop_id) REFERENCES LOP(lop_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến LOP
);

DROP TABLE IF EXISTS DIEN_DAN;
CREATE TABLE DIEN_DAN (
    dien_dan_id INT PRIMARY KEY, -- ID của diễn đàn (khóa chính)
    lop_id INT NOT NULL, -- ID lớp mà diễn đàn thuộc (liên kết đến bảng LOP)
    tieu_de VARCHAR(255) NOT NULL, -- Tiêu đề của diễn đàn
    noi_dung TEXT NOT NULL, -- Nội dung của diễn đàn
    CONSTRAINT FK_DienDan_Lop FOREIGN KEY (lop_id) REFERENCES LOP(lop_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến LOP
);

DROP TABLE IF EXISTS TIN_NHAN;
CREATE TABLE TIN_NHAN (
    tin_nhan_id INT PRIMARY KEY, -- ID của tin nhắn (khóa chính)
    nguoi_gui_id INT NOT NULL, -- ID của người gửi tin nhắn (liên kết đến bảng USER)
    noi_dung TEXT NOT NULL, -- Nội dung của tin nhắn
    thoi_gian DATETIME NOT NULL, -- Thời gian gửi tin nhắn
    CONSTRAINT FK_TinNhan_User FOREIGN KEY (nguoi_gui_id) REFERENCES [USER](user_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến USER
);

DROP TABLE IF EXISTS QUAN_TRI_VIEN;
CREATE TABLE QUAN_TRI_VIEN (
    ma_quan_tri VARCHAR(20) PRIMARY KEY, -- Mã của quản trị viên (khóa chính)
    user_id INT NOT NULL, -- ID của quản trị viên trên hệ thống (liên kết với bảng USER)
    CONSTRAINT FK_QuanTri_User FOREIGN KEY (user_id) REFERENCES [USER](user_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến bảng USER
);

DROP TABLE IF EXISTS LOG_HOAT_DONG;
CREATE TABLE LOG_HOAT_DONG (
    log_id INT PRIMARY KEY, -- ID của hoạt động (khóa chính)
    admin_id INT NOT NULL, -- ID của admin thực hiện hành động (liên kết với bảng USER)
    user_id INT NOT NULL, -- ID của người dùng liên quan (liên kết với bảng USER)
    hanh_dong VARCHAR(20) NOT NULL CHECK (hanh_dong IN ('Thêm', 'Sửa', 'Xóa')), -- Hành động của admin
    thoi_gian DATETIME NOT NULL, -- Thời gian admin thực hiện hành động
    CONSTRAINT FK_LogHoatDong_Admin FOREIGN KEY (admin_id) REFERENCES [USER](user_id) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến bảng USER cho admin
    CONSTRAINT FK_LogHoatDong_User FOREIGN KEY (user_id) REFERENCES [USER](user_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến bảng USER cho người dùng
);


DROP TABLE IF EXISTS DANG_KY_MON_HOC;
CREATE TABLE DANG_KY_MON_HOC (
    dang_ky_id INT PRIMARY KEY, -- ID đăng ký (khóa chính)
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (liên kết với bảng SINH_VIEN)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học (liên kết với bảng MON_HOC)
    ngay_dang_ky DATETIME NOT NULL, -- Ngày sinh viên đăng ký môn học
    trang_thai_dang_ky VARCHAR(20) NOT NULL CHECK (trang_thai_dang_ky IN ('Thành công', 'Thiếu điều kiện', 'Đã hủy')), -- Trạng thái đăng ký
    CONSTRAINT FK_DangKy_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến bảng SINH_VIEN
    CONSTRAINT FK_DangKy_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến bảng MON_HOC
);

DROP TABLE IF EXISTS MON_SINH_VIEN_HOC;
CREATE TABLE MON_SINH_VIEN_HOC (
    mon_sinh_vien_hoc_id INT PRIMARY KEY, -- ID đăng ký môn học của sinh viên (khóa chính)
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (khóa ngoại, liên kết với bảng SINH_VIEN)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học (khóa ngoại, liên kết với bảng MON_HOC)
    hoc_ky VARCHAR(20) NOT NULL, -- Học kỳ mà sinh viên học môn này (khóa ngoại, liên kết với bảng HOC_KY)
    trang_thai_hoc VARCHAR(20) NOT NULL CHECK (trang_thai_hoc IN ('Đang học', 'Đã học', 'Chưa học')), -- Trạng thái học môn
    diem_id INT, -- Điểm của môn học (khóa ngoại, liên kết với bảng DIEM)
    CONSTRAINT FK_MonSinhVienHoc_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến bảng SINH_VIEN
    CONSTRAINT FK_MonSinhVienHoc_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến bảng MON_HOC
    CONSTRAINT FK_MonSinhVienHoc_HocKy FOREIGN KEY (hoc_ky) REFERENCES HOC_KY(hoc_ky) ON DELETE CASCADE ON UPDATE CASCADE, -- Ràng buộc khóa ngoại đến bảng HOC_KY
    CONSTRAINT FK_MonSinhVienHoc_Diem FOREIGN KEY (diem_id) REFERENCES DIEM(diem_id) ON DELETE CASCADE ON UPDATE CASCADE -- Ràng buộc khóa ngoại đến bảng DIEM
);

INSERT INTO [USER] (user_id, email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, mat_khau, quyen)
VALUES (1, 'example@example.com', '0123456789', 'Nguyen A', '1998-01-01', 'Nam', 'password_hash', 'Sinh viên');

SELECT * FROM [USER];
DELETE FROM [USER] WHERE user_id = 1;




