
-- Tạo Bảng ---------------------------------------------------------------------------------------------------------------- 
CREATE TABLE [USER] (
    user_id VARCHAR(20) PRIMARY KEY,
    user_mail VARCHAR(30) NOT NULL UNIQUE, -- mail người dùng
	mat_khau VARCHAR(255) NOT NULL, -- Mật khẩu của user
	ho_ten NVARCHAR(255) NOT NULL, -- Họ tên user
	gioi_tinh VARCHAR(10) CHECK (gioi_tinh IN ('Male', 'Female')) NOT NULL, -- Giới tính của user
	ngay_sinh DATE, -- Ngày sinh user
    email VARCHAR(255) , -- Email riêng (nếu có)
    so_dien_thoai VARCHAR(20) NOT NULL, -- Số điện thoại liên lạc
    dia_chi NVARCHAR(255),
    khoa_id VARCHAR(20) NOT NULL -- Khoa mà User thuộc
);

CREATE TABLE GIANG_VIEN (
    ma_giang_vien VARCHAR(20) PRIMARY KEY, -- Mã giảng viên (khóa chính)
	hoc_vi NVARCHAR(255) NOT NULL,
    chuyen_nganh NVARCHAR(255) NOT NULL, -- Chuyên ngành của giảng viên
);

CREATE TABLE SINH_VIEN (
    ma_sinh_vien VARCHAR(20) PRIMARY KEY, -- Mã sinh viên
    GPA FLOAT DEFAULT 0, -- GPA của sinh viên
    so_tin_chi_tich_luy INT DEFAULT 0, -- Số tín chỉ tích lũy của sinh viên
);

CREATE TABLE HOC_KY (
    hoc_ky VARCHAR(20) PRIMARY KEY, -- Tên học kỳ (khóa chính)
    thoi_gian_bat_dau DATETIME,
    thoi_gian_ket_thuc DATETIME
);

CREATE TABLE KHOA (
    khoa_id VARCHAR(20) PRIMARY KEY, -- ID của khoa (khóa chính)
    ten_khoa NVARCHAR(255) NOT NULL, -- Tên của khoa (không được để trống)
	ma_truong_khoa VARCHAR(20) NOT NULL, -- ID trưởng khoa của khoa (liên kết với bảng GIANG_VIEN)
	ngay_thanh_lap DATE,
);

CREATE TABLE MON_HOC (
    ma_mon_hoc VARCHAR(20) PRIMARY KEY, -- Mã môn học (khóa chính)
    ten_mon_hoc NVARCHAR(255) NOT NULL, -- Tên môn học (bắt buộc nhập)
    so_tin_chi INT NOT NULL, -- Số tín chỉ của môn học
    khoa_id VARCHAR(20) NOT NULL, -- Khoa mà môn học thuộc (khóa ngoại đến bảng KHOA)
);

CREATE TABLE MON_TIEN_QUYET (
    ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học (khóa chính)
    ma_mon_tien_quyet VARCHAR(20) NOT NULL, -- Mã môn học tiên quyết (bắt buộc nhập)
    PRIMARY KEY(ma_mon_hoc, ma_mon_tien_quyet) --(đều liên kết với bảng MON_HOC)
);

CREATE TABLE DANG_KY_MON_HOC (
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (liên kết với bảng SINH_VIEN)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- Mã môn học (liên kết với bảng MON_HOC)
	hoc_ky VARCHAR(20) NOT NULL,
    ngay_dang_ky DATETIME NOT NULL, -- Ngày sinh viên đăng ký môn học
    trang_thai_dang_ky VARCHAR(20) NOT NULL CHECK (trang_thai_dang_ky IN ('Thành công', 'Thiếu điều kiện', 'Đã hủy', 'Chưa Xử Lí')), -- Trạng thái đăng ký
    PRIMARY KEY(ma_sinh_vien, ma_mon_hoc)
);

CREATE TABLE LOP_HOC (
    lop_id VARCHAR(20) PRIMARY KEY, -- ID của lớp (khóa chính)
    ma_mon_hoc VARCHAR(20) NOT NULL, -- ID của môn học (liên kết với bảng MON_HOC)
    hoc_ky VARCHAR(20) NOT NULL, -- Học kỳ của lớp học (liên kết với bảng HOC_KY)
    ma_giang_vien VARCHAR(20) NOT NULL, -- Mã giảng viên phụ trách lớp học (liên kết với bảng GIANG_VIEN)
);

CREATE TABLE THAM_GIA_LOP_HOC (
	lop_id VARCHAR(20) NOT NULL,
    ma_sinh_vien VARCHAR(20) NOT NULL, -- Mã sinh viên (liên kết với bảng SINH_VIEN)
    diem_bt FLOAT, 
	diem_btl FLOAT,
    diem_gk FLOAT, 
    diem_ck FLOAT, 
    PRIMARY KEY(lop_id, ma_sinh_vien)
);

CREATE TABLE BUOI_HOC (
    lop_id VARCHAR(20) NOT NULL, 
    phong_hoc VARCHAR(20) NOT NULL,
    thu INT NOT NULL,
    tiet_bat_dau INT NOT NULL,
    tiet_ket_thuc INT NOT NULL, 
    PRIMARY KEY(lop_id, phong_hoc, thu, tiet_bat_dau, tiet_ket_thuc),
);

CREATE TABLE TAI_NGUYEN_LOP_HOC (
    lop_id VARCHAR(20) NOT NULL, 
    ten_tai_nguyen NVARCHAR(255), 
    url NVARCHAR(2083),
    PRIMARY KEY(lop_id, ten_tai_nguyen)
);

CREATE TABLE DIEN_DAN (
    dien_dan_id INT NOT NULL, -- ID của diễn đàn (khóa chính)
    lop_id VARCHAR(20) NOT NULL, -- ID lớp mà diễn đàn thuộc (liên kết đến bảng LOP)
    tieu_de NVARCHAR(255) NOT NULL, -- Tiêu đề của diễn đàn
	PRIMARY KEY(lop_id, dien_dan_id)
);

CREATE TABLE TIN_NHAN (
	lop_id VARCHAR(20) NOT NULL,
	dien_dan_id INT NOT NULL,
    tin_nhan_id INT NOT NULL, -- ID của tin nhắn (khóa chính)
    nguoi_gui VARCHAR(30) NOT NULL, -- ID của người gửi tin nhắn (liên kết đến bảng USER)
    noi_dung NVARCHAR(255) NOT NULL, -- Nội dung của tin nhắn
    thoi_gian DATETIME NOT NULL, -- Thời gian gửi tin nhắn
    phan_hoi_id INT,
	PRIMARY KEY(lop_id, dien_dan_id, tin_nhan_id)
);

-- Tạo Ràng Buộc ----------------------------------------------------------------------------------------------------------------
ALTER TABLE [USER]
ADD CONSTRAINT FK_User_Khoa FOREIGN KEY (khoa_id) REFERENCES Khoa(khoa_id)  ;

ALTER TABLE GIANG_VIEN
ADD CONSTRAINT FK_GiangVien_User FOREIGN KEY (ma_giang_vien) REFERENCES [USER](user_id)  ; -- Ràng buộc khóa ngoại liên kết với bảng USER

ALTER TABLE SINH_VIEN
ADD CONSTRAINT FK_SinhVien_User FOREIGN KEY (ma_sinh_vien) REFERENCES [User](user_id)  ; -- Khóa ngoại liên kết bảng User

ALTER TABLE KHOA
ADD CONSTRAINT FK_Khoa_GiangVien FOREIGN KEY (ma_truong_khoa) REFERENCES GIANG_VIEN(ma_giang_vien) ; -- Khóa ngoại liên kết bảng User

ALTER TABLE MON_HOC
ADD CONSTRAINT FK_MonHoc_Khoa FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id)  ; -- Ràng buộc khóa ngoại liên kết với bảng KHOA

ALTER TABLE MON_TIEN_QUYET
ADD CONSTRAINT FK_MonTienquyet_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc)  , -- Ràng buộc khóa ngoại liên kết với bảng KHOA
	CONSTRAINT FK_MonTienquyet_MonHoc_1 FOREIGN KEY (ma_mon_tien_quyet) REFERENCES MON_HOC(ma_mon_hoc)  ; -- Ràng buộc khóa ngoại liên kết với bảng KHOA

ALTER TABLE DANG_KY_MON_HOC
ADD CONSTRAINT FK_DangKyMonHoc_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien)  , -- Ràng buộc khóa ngoại đến bảng SINH_VIEN
    CONSTRAINT FK_DangKyMonHoc_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc)  , -- Ràng buộc khóa ngoại đến bảng MON_HOC
	CONSTRAINT FK_DangKyMonHoc_HocKy FOREIGN KEY (hoc_ky) REFERENCES HOC_KY(hoc_ky);

ALTER TABLE LOP_HOC
ADD CONSTRAINT FK_LopHoc_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc)  , -- Ràng buộc khóa ngoại đến MON_HOC
    CONSTRAINT FK_LopHoc_HocKy FOREIGN KEY (hoc_ky) REFERENCES HOC_KY(hoc_ky)  , -- Ràng buộc khóa ngoại đến HOC_KY
    CONSTRAINT FK_LopHoc_GiangVien FOREIGN KEY (ma_giang_vien) REFERENCES GIANG_VIEN(ma_giang_vien)  ; -- Ràng buộc khóa ngoại đến GIANG_VIEN

ALTER TABLE THAM_GIA_LOP_HOC
ADD CONSTRAINT FK_ThamGiaLopHoc_LopHoc FOREIGN KEY (lop_id) REFERENCES LOP_HOC(lop_id)  , -- Ràng buộc khóa ngoại đến LOP_HOC
    CONSTRAINT FK_ThamGiaLopHoc_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien)   ; -- Ràng buộc khóa ngoại đến SiNH_VIEN

ALTER TABLE BUOI_HOC
ADD CONSTRAINT FK_BuoiHoc_LopHoc FOREIGN KEY (lop_id) REFERENCES LOP_HOC(lop_id)  ; -- Ràng buộc khóa ngoại liên kết với bảng LOP_HOC

ALTER TABLE TAI_NGUYEN_LOP_HOC
ADD CONSTRAINT FK_TaiNguyenLopHoc_LopHoc FOREIGN KEY (lop_id) REFERENCES LOP_HOC(lop_id)  ; -- Ràng buộc khóa ngoại liên kết với bảng LOP_HOC

ALTER TABLE DIEN_DAN
ADD CONSTRAINT FK_DienDan_Lop FOREIGN KEY (lop_id) REFERENCES LOP_HOC(lop_id)  ; -- Ràng buộc khóa ngoại đến LOP_HOC

ALTER TABLE TIN_NHAN
ADD CONSTRAINT FK_TinNhan_User FOREIGN KEY (nguoi_gui) REFERENCES [USER](user_mail)  , -- Ràng buộc khóa ngoại đến USER
	CONSTRAINT FK_TinNhan_DienDan FOREIGN KEY (lop_id, dien_dan_id) REFERENCES DIEN_DAN(lop_id, dien_dan_id)  ,
	CONSTRAINT FK_TinNhan_TinNhan FOREIGN KEY (lop_id, dien_dan_id, phan_hoi_id) REFERENCES TIN_NHAN(lop_id, dien_dan_id, tin_nhan_id)  ;


-- Các hàm ----------------------------------------------------------------------------------------------------------------
CREATE FUNCTION DanhSachLopGiangDay (
    @ma_giang_vien VARCHAR(20),
    @hoc_ky VARCHAR(20)
)
RETURNS TABLE
AS
RETURN
(
    SELECT lh.lop_id, 
           lh.ma_mon_hoc, 
           mh.ten_mon_hoc, 
           mh.so_tin_chi,
           bh.phong_hoc, 
           bh.thu, 
           bh.tiet_bat_dau, 
           bh.tiet_ket_thuc
    FROM LOP_HOC lh
    INNER JOIN MON_HOC mh ON lh.ma_mon_hoc = mh.ma_mon_hoc
    INNER JOIN BUOI_HOC bh ON lh.lop_id = bh.lop_id
    WHERE lh.ma_giang_vien = @ma_giang_vien AND lh.hoc_ky = @hoc_ky
);
GO

CREATE FUNCTION DanhSachLopHoc (
    @ma_sinh_vien VARCHAR(20),
    @hoc_ky VARCHAR(20)
)
RETURNS TABLE
AS
RETURN
(
    SELECT DISTINCT lh.lop_id, 
                    lh.ma_mon_hoc, 
                    mh.ten_mon_hoc, 
                    mh.so_tin_chi,
                    u.ho_ten AS ten_giang_vien,
                    bh.phong_hoc, 
                    bh.thu, 
                    bh.tiet_bat_dau, 
                    bh.tiet_ket_thuc
    FROM THAM_GIA_LOP_HOC tglh
    INNER JOIN LOP_HOC lh ON tglh.lop_id = lh.lop_id
    INNER JOIN MON_HOC mh ON lh.ma_mon_hoc = mh.ma_mon_hoc
    INNER JOIN GIANG_VIEN gv ON lh.ma_giang_vien = gv.ma_giang_vien
    INNER JOIN [USER] u ON gv.ma_giang_vien = u.user_id
    INNER JOIN BUOI_HOC bh ON lh.lop_id = bh.lop_id
    WHERE tglh.ma_sinh_vien = @ma_sinh_vien AND lh.hoc_ky = @hoc_ky
);
GO

CREATE FUNCTION TaiNguyenLopHoc (@lop_id VARCHAR(20))
RETURNS TABLE
AS
RETURN
(
    SELECT ten_tai_nguyen, url
    FROM TAI_NGUYEN_LOP_HOC
    WHERE lop_id = @lop_id
);
GO

CREATE FUNCTION XemDiem
(
    @lop_id VARCHAR(20),
    @ma_sinh_vien VARCHAR(20)
)
RETURNS TABLE
AS
RETURN
(
    SELECT
        lop_id AS classID,
        ma_sinh_vien AS studentID,
        diem_bt AS assnScore,  -- Điểm bài tập
        diem_btl AS projScore,    -- Điểm bài tập lớn (BTL)
        diem_gk AS midScore,     -- Điểm giữa kỳ
        diem_ck AS finalScore        -- Điểm cuối kỳ
    FROM THAM_GIA_LOP_HOC
    WHERE lop_id = @lop_id AND ma_sinh_vien = @ma_sinh_vien
);
GO

CREATE FUNCTION LayThongTinForum
(
    @lop_id VARCHAR(20),
    @dien_dan_id INT
)
RETURNS TABLE
AS
RETURN
(
    SELECT 
        dd.tieu_de AS forumTitle,              -- Tiêu đề của diễn đàn
        tn.tin_nhan_id AS messageID,           -- ID của tin nhắn
        tn.nguoi_gui AS senderID,              -- Người gửi tin nhắn (user_id)
        u.ho_ten AS senderName,                -- Tên người gửi (từ bảng USER)
        tn.noi_dung AS messageContent,         -- Nội dung tin nhắn
        tn.thoi_gian AS timeSent,              -- Thời gian gửi tin nhắn
        tn.phan_hoi_id AS replyID              -- ID của phản hồi (nếu có)
    FROM DIEN_DAN dd
    INNER JOIN TIN_NHAN tn ON dd.dien_dan_id = tn.dien_dan_id AND dd.lop_id = tn.lop_id
    LEFT JOIN [USER] u ON tn.nguoi_gui = u.user_id  -- Kết nối với bảng USER để lấy tên người gửi
    WHERE dd.lop_id = @lop_id
      AND dd.dien_dan_id = @dien_dan_id
);
GO

-- Các thủ tục ----------------------------------------------------------------------------------------------------------------
CREATE PROCEDURE KiemTraDangNhap
    @user_mail VARCHAR(30),
    @mat_khau VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT 1 FROM [USER] WHERE user_mail = @user_mail AND mat_khau = @mat_khau)
    BEGIN
        RETURN 0; -- Trả về mã thành công
    END
    ELSE
    BEGIN
        RETURN 1; -- Trả về mã lỗi
    END
END;
GO

CREATE PROCEDURE ThemGiangVien (
    @user_mail VARCHAR(30),       -- Email của giảng viên
    @mat_khau VARCHAR(255),       -- Mật khẩu của giảng viên
    @ho_ten NVARCHAR(255),        -- Họ tên của giảng viên
    @gioi_tinh VARCHAR(10),       -- Giới tính của giảng viên
    @ngay_sinh DATE,              -- Ngày sinh của giảng viên
    @email VARCHAR(255),          -- Email riêng (nếu có)
    @so_dien_thoai VARCHAR(20),   -- Số điện thoại
    @dia_chi NVARCHAR(255),       -- Địa chỉ
    @hoc_vi NVARCHAR(255),        -- Học vị
    @chuyen_nganh NVARCHAR(255),  -- Chuyên ngành
    @khoa_id VARCHAR(20)          -- Khoa ID
)
AS
BEGIN
    BEGIN TRY
        -- Tạo user_id tự động cho giảng viên
        DECLARE @new_user_id VARCHAR(20);
        WITH ExtractedIDs AS (
            SELECT 
                CAST(SUBSTRING(ma_giang_vien, 3, LEN(ma_giang_vien) - 2) AS INT) AS stt
            FROM GIANG_VIEN
            WHERE ma_giang_vien LIKE 'GV%'
        )
        SELECT 
            @new_user_id = 'GV' + RIGHT('000' + CAST(ISNULL(MAX(stt), 0) + 1 AS VARCHAR), 3)
        FROM ExtractedIDs;

        -- Thêm vào bảng USER
        INSERT INTO [USER] (user_id, user_mail, mat_khau, ho_ten, gioi_tinh, ngay_sinh, email, so_dien_thoai, dia_chi, khoa_id)
        VALUES (@new_user_id, @user_mail, @mat_khau, @ho_ten, @gioi_tinh, @ngay_sinh, @email, @so_dien_thoai, @dia_chi, @khoa_id);

        -- Thêm vào bảng GIANG_VIEN
        INSERT INTO GIANG_VIEN (ma_giang_vien, hoc_vi, chuyen_nganh)
        VALUES (@new_user_id, @hoc_vi, @chuyen_nganh);

        -- Nếu thành công, trả về 0
        RETURN 0;

    END TRY
    BEGIN CATCH
        -- Bắt lỗi và trả về mã lỗi
        RETURN ERROR_NUMBER(); -- Trả về mã lỗi SQL Server
    END CATCH
END;
GO

CREATE PROCEDURE ThemSinhVien (
    @user_mail VARCHAR(30),       -- Email của sinh viên
    @mat_khau VARCHAR(255),       -- Mật khẩu của sinh viên
    @ho_ten NVARCHAR(255),        -- Họ tên của sinh viên
    @gioi_tinh VARCHAR(10),       -- Giới tính của sinh viên
    @ngay_sinh DATE,              -- Ngày sinh của sinh viên
    @email VARCHAR(255),          -- Email riêng (nếu có)
    @so_dien_thoai VARCHAR(20),   -- Số điện thoại
    @dia_chi NVARCHAR(255),       -- Địa chỉ
    @khoa_id VARCHAR(20)          -- Khoa ID
)
AS
BEGIN
    BEGIN TRY
        -- Tạo user_id tự động cho sinh viên
        DECLARE @new_user_id VARCHAR(20);
        WITH ExtractedIDs AS (
            SELECT 
                CAST(SUBSTRING(ma_sinh_vien, 3, LEN(ma_sinh_vien) - 2) AS INT) AS stt
            FROM SINH_VIEN
            WHERE ma_sinh_vien LIKE 'SV%'
        )
        SELECT 
            @new_user_id = 'SV' + RIGHT('000' + CAST(ISNULL(MAX(stt), 0) + 1 AS VARCHAR), 3)
        FROM ExtractedIDs;

        -- Thêm vào bảng USER
        INSERT INTO [USER] (user_id, user_mail, mat_khau, ho_ten, gioi_tinh, ngay_sinh, email, so_dien_thoai, dia_chi, khoa_id)
        VALUES (@new_user_id, @user_mail, @mat_khau, @ho_ten, @gioi_tinh, @ngay_sinh, @email, @so_dien_thoai, @dia_chi, @khoa_id);
        
        -- Thêm vào bảng SINH_VIEN
        INSERT INTO SINH_VIEN (ma_sinh_vien)
        VALUES (@new_user_id);

        -- Trả về 0 nếu thành công
        RETURN 0;

    END TRY
    BEGIN CATCH
        -- Bắt lỗi và trả về mã lỗi
        RETURN ERROR_NUMBER(); -- Trả về mã lỗi SQL Server
    END CATCH
END;
GO

CREATE PROCEDURE ThemTaiNguyenVaoLop
    @lop_id VARCHAR(20),
    @ten_tai_nguyen NVARCHAR(255),
    @url NVARCHAR(2083)
AS
BEGIN
    BEGIN TRY
        BEGIN
            -- Thêm tài nguyên mới vào lớp học
            INSERT INTO TAI_NGUYEN_LOP_HOC (lop_id, ten_tai_nguyen, url)
            VALUES (@lop_id, @ten_tai_nguyen, @url);
        END
    END TRY
    BEGIN CATCH
        -- Bắt lỗi và trả về mã lỗi cùng thông điệp lỗi
        RETURN ERROR_NUMBER();
    END CATCH
END;

-- Thêm Dữ Liệu ----------------------------------------------------------------------------------------------------------------
SET DATEFORMAT DMY;
ALTER TABLE KHOA NOCHECK CONSTRAINT ALL;
INSERT INTO KHOA (khoa_id, ten_khoa, ma_truong_khoa, ngay_thanh_lap)
VALUES
('CS', N'Khoa Học Máy Tính', '001', '14-12-2024'),
('CE', N'Kỹ Thuật Máy Tính', '004', '01-01-2000'),
('ES', N'Khoa Học Môi Trường', '006', '15-08-1995'),
('ME', N'Khoa Cơ Khí', '008', '23-04-2010'),
('CHE', N'Kỹ Thuật Hóa Học', '010', '09-09-2008');
ALTER TABLE KHOA CHECK CONSTRAINT ALL;

INSERT INTO [USER] (user_id,user_mail, mat_khau, ho_ten, gioi_tinh, ngay_sinh, email, so_dien_thoai, dia_chi, khoa_id) 
VALUES
('GV001','huy.daoitman@hcmut.edu.vn', '04112004', N'Đào Hữu Gia Huy', 'Male', '24-11-2004', 'huy.daoitman@gmail.com', '0792051596', '120/122 Thích Quảng Đức', 'CS'),
('GV002','nguyen.thanh@hcmut.edu.vn', '01011999', N'Nguyễn Thanh', 'Male', '01-01-1999', 'nguyen.thanh@gmail.com', '0901234567', '58/7 Nguyễn Văn Cừ', 'CS'),
('GV003','trang.kim@hcmut.edu.vn', '02022000', N'Trần Kim Trang', 'Female', '02-02-2000', 'trang.kim@gmail.com', '0912345678', '12 Đoàn Văn Bơ', 'CE'),
('GV004','le.hong@hcmut.edu.vn', '03031998', N'Lê Hồng Quân', 'Male', '03-03-1998', 'le.hong@gmail.com', '0932134567', '15 Phan Đình Phùng', 'CE'),
('GV005','mai.thu@hcmut.edu.vn', '04042002', N'Mai Thu Hương', 'Female', '04-04-2002', 'mai.thu@gmail.com', '0945678901', '77 Hoàng Văn Thụ', 'ES'),
('GV006','pham.quyen@hcmut.edu.vn', '05112001', N'Phạm Quỳnh Anh', 'Female', '05-11-2001', 'pham.quyen@gmail.com', '0987654321', '22 Lý Thường Kiệt', 'ES'),
('GV007','vannam.tan@hcmut.edu.vn', '06121997', N'Văn Nam Tân', 'Male', '06-12-1997', 'vannam.tan@gmail.com', '0976543210', '88 Nguyễn Trãi', 'ME'),
('GV008','hoang.mai@hcmut.edu.vn', '07051996', N'Hoàng Mai Lan', 'Female', '07-05-1996', 'hoang.mai@gmail.com', '0998765432', '34 Trần Hưng Đạo', 'CHE'),
('SV001','minh.quoc@hcmut.edu.vn', '08082003', N'Nguyễn Minh Quốc', 'Male', '08-08-2003', 'minh.quoc@gmail.com', '0982345678', '99 Lê Quang Định', 'CS'),
('SV002','quyen.thi@hcmut.edu.vn', '09091997', N'Trần Thị Quyên', 'Female', '09-09-1997', 'quyen.thi@gmail.com', '0918765432', '56 Nguyễn Hữu Cảnh', 'CS'),
('SV003','lan.bich@hcmut.edu.vn', '10102002', N'Lâm Bích Ngọc', 'Female', '10-10-2002', 'lan.bich@gmail.com', '0933456789', '21 Hàm Nghi', 'CE'),
('SV004','tu.quang@hcmut.edu.vn', '11111999', N'Ngô Quang Tuấn', 'Male', '11-11-1999', 'tu.quang@gmail.com', '0912345670', '101 Trần Phú', 'CE'),
('SV005','anh.duc@hcmut.edu.vn', '12122000', N'Phan Anh Đức', 'Male', '12-12-2000', 'anh.duc@gmail.com', '0987456123', '54 Lý Tự Trọng', 'ES'),
('SV006','thao.nam@hcmut.edu.vn', '13132004', N'Nguyễn Thảo Nam', 'Female', '13-01-2004', 'thao.nam@gmail.com', '0976543212', '43 Phạm Ngọc Thạch', 'ES'),
('SV007','chung.tri@hcmut.edu.vn', '14142001', N'Lê Chung Triều', 'Male', '14-04-2001', 'chung.tri@gmail.com', '0943322110', '65 Đường 3/2', 'ME'),
('SV008','hien.hoa@hcmut.edu.vn', '15152002', N'Lê Hien Hoa', 'Female', '15-05-2002', 'hien.hoa@gmail.com', '0968776543', '10 Trường Sơn', 'ME'),
('SV009','bao.duong@hcmut.edu.vn', '16162000', N'Dương Bảo Quang', 'Male', '16-06-2000', 'bao.duong@gmail.com', '0934765321', '44 Võ Thị Sáu', 'CHE'),
('SV010','tuan.an@hcmut.edu.vn', '17172004', N'Nguyễn Tuấn Anh', 'Male', '17-07-2004', 'tuan.an@gmail.com', '0977654320', '120 Trần Đại Nghĩa', 'CHE');

INSERT INTO GIANG_VIEN (ma_giang_vien, hoc_vi, chuyen_nganh) 
VALUES
('GV001', N'Giáo Sư', N'Trí Tuệ Nhân Tạo'),
('GV002', N'Phó Giáo Sư', N'Mạng Máy Tính'),
('GV003', N'Thạc Sĩ', N'Công Nghệ Phần Mềm'),
('GV004', N'Thạc Sĩ', N'Cơ Điện Tử'),
('GV005', N'Phó Giáo Sư', N'Tự Động Hóa'),
('GV006', N'Thạc Sĩ', N'Quản Trị Kinh Doanh'),
('GV007', N'Thạc Sĩ', N'Kinh Tế Học'),
('GV008', N'Thạc Sĩ', N'Tâm Lý Học');

INSERT INTO SINH_VIEN (ma_sinh_vien, GPA, so_tin_chi_tich_luy) 
VALUES
('SV001', 4.0, 10),
('SV002', 3.0, 15),
('SV003', 3.2, 18),
('SV004', 3.1, 19),
('SV005', 2.8, 13),
('SV006', 2.7, 14),
('SV007', 2.5, 16),
('SV008', 4.0, 13),
('SV009', 2.7, 14),
('SV010', 2.5, 16);

INSERT INTO HOC_KY (hoc_ky, thoi_gian_bat_dau, thoi_gian_ket_thuc) 
VALUES
('HK241', '30-08-2024', '30-12-2024'),
('HK242', '06-01-2024', '06-05-2024');

INSERT INTO MON_HOC (ma_mon_hoc, ten_mon_hoc, so_tin_chi, khoa_id) 
VALUES
('CS001', N'Lập Trình Cơ Bản', 3, 'CS'),
('CS002', N'Cấu Trúc Dữ Liệu', 4, 'CS'),
('CE001', N'Mạng Máy Tính', 3, 'CE'),
('CE002', N'Hệ Thống Nhúng', 3, 'CE'),
('ES001', N'Quản Lý Môi Trường', 2, 'ES'),
('ES002', N'Công Nghệ Xử Lý Nước', 3, 'ES'),
('ME001', N'Cơ Học Kỹ Thuật', 3, 'ME'),
('ME002', N'Thiết Kế Máy', 4, 'ME'),
('CHE001', N'Hóa Học Hữu Cơ', 3, 'CHE'),
('CHE002', N'Công Nghệ Hóa Dầu', 4, 'CHE');

INSERT INTO MON_TIEN_QUYET (ma_mon_hoc, ma_mon_tien_quyet)
VALUES
('CS002', 'CS001'),
('CE002', 'CE001'),
('ES002', 'ES001');

INSERT INTO DANG_KY_MON_HOC (ma_sinh_vien, ma_mon_hoc, hoc_ky, ngay_dang_ky, trang_thai_dang_ky)
VALUES
('SV001', 'CS001', 'HK242', '14-12-2024', 'Chưa Xử Lí'),
('SV001', 'CS002', 'HK242', '10-12-2024', 'Chưa Xử Lí'),
('SV002', 'CS001', 'HK242', '11-12-2024', 'Chưa Xử Lí'),
('SV002', 'CS002', 'HK242', '11-12-2024', 'Chưa Xử Lí'),
('SV003', 'CE001', 'HK242', '11-12-2024', 'Chưa Xử Lí'),
('SV004', 'CE002', 'HK242', '14-12-2024', 'Chưa Xử Lí'),
('SV005', 'ES001', 'HK242', '12-12-2024', 'Chưa Xử Lí'),
('SV006', 'ES002', 'HK242', '14-12-2024', 'Chưa Xử Lí'),
('SV007', 'ME001', 'HK242', '13-12-2024', 'Chưa Xử Lí'),
('SV008', 'ME002', 'HK242', '12-12-2024', 'Chưa Xử Lí'),
('SV009', 'CHE001', 'HK242', '14-12-2024', 'Chưa Xử Lí'),
('SV010', 'CHE002', 'HK242', '13-12-2024', 'Chưa Xử Lí');

INSERT INTO LOP_HOC (lop_id, ma_mon_hoc, hoc_ky, ma_giang_vien)
VALUES
('CS001_1', 'CS001', 'HK241', 'GV001'),
('CS001_2', 'CS001', 'HK241', 'GV002'),
('CE001_1', 'CE001', 'HK241', 'GV003'),
('CE002_1', 'CE002', 'HK241', 'GV004'),
('ES001_1', 'ES001', 'HK241', 'GV005'),
('ES001_2', 'ES001', 'HK241', 'GV006'),
('ME001_1', 'ME001', 'HK241', 'GV007'),
('CHE002_1', 'CHE002', 'HK241', 'GV008');

INSERT INTO BUOI_HOC (lop_id, phong_hoc, thu, tiet_bat_dau, tiet_ket_thuc)
VALUES
('CS001_1', 'A1-101', 2, 1, 5),
('CS001_2', 'A1-102', 3, 2, 6),
('CE001_1', 'A1-103', 4, 3, 7),
('CE002_1', 'A1-104', 5, 4, 8),
('ES001_1', 'A1-105', 6, 5, 9),
('ES001_2', 'A1-106', 7, 6, 10),
('ME001_1', 'A1-107', 1, 7, 11),
('CHE002_1', 'A1-109', 7, 9, 13);

INSERT INTO TAI_NGUYEN_LOP_HOC (lop_id, ten_tai_nguyen, url)
VALUES 
('CS001_1', 'chapter1', 'google.com'),
('CS001_1', 'chapter2', 'youtube.com'),
('CS001_1', 'chapter3', 'vimeo.com'),
('CS001_1', 'chapter4', 'facebook.com'),
('CS001_2', 'chapter5', 'twitter.com'),
('CE001_1', 'chapter6', 'linkedin.com'),
('CE002_1', 'chapter7', 'github.com'),
('ES001_1', 'chapter8', 'stackoverflow.com'),
('ES001_2', 'chapter9', 'medium.com');


INSERT INTO THAM_GIA_LOP_HOC (lop_id, ma_sinh_vien)
VALUES
('CS001_1', 'SV001'),
('CS001_1', 'SV002'),
('CS001_2', 'SV003'),
('CS001_2', 'SV004'),
('CE001_1', 'SV005'),
('CE001_1', 'SV006'),
('CE002_1', 'SV007'),
('CE002_1', 'SV008'),
('ES001_1', 'SV001'),
('ES001_1', 'SV002'),
('ES001_2', 'SV003'),
('ES001_2', 'SV004'),
('ME001_1', 'SV005'),
('ME001_1', 'SV006'),
('CHE002_1', 'SV007'),
('CHE002_1', 'SV008'),
('CHE002_1', 'SV009'),
('CHE002_1', 'SV010');

INSERT INTO DIEN_DAN (lop_id, dien_dan_id, tieu_de)
VALUES
('CS001_1', 1, N'Diễn đàn Lập Trình Cơ Bản'),
('CS001_2', 1, N'Diễn đàn Cấu Trúc Dữ Liệu'),
('CE001_1', 1, N'Diễn đàn Mạng Máy Tính'),
('CE002_1', 1, N'Diễn đàn Hệ Thống Nhúng'),
('ES001_1', 1, N'Diễn đàn Quản Lý Môi Trường'),
('ES001_2', 1, N'Diễn đàn Công Nghệ Xử Lý Nước'),
('ME001_1', 1, N'Diễn đàn Cơ Học Kỹ Thuật'),
('CHE002_1', 1, N'Diễn đàn Công Nghệ Hóa Dầu');

INSERT INTO TIN_NHAN (lop_id, dien_dan_id, tin_nhan_id, nguoi_gui, noi_dung, thoi_gian, phan_hoi_id)
VALUES 
('CS001_1', 1, 1, 'huy.daoitman@hcmut.edu.vn', N'Hello mọi người!', '14-12-2024', NULL),
('CS001_1', 1, 2, 'chung.tri@hcmut.edu.vn', N'Chào thầy Huy đẹp trai!', '14-12-2024', 1),
('CS001_2', 1, 1, 'tuan.an@hcmut.edu.vn', N'Lớp CS001_2 sẵn sàng học chưa?', '14-12-2024', NULL),
('CS001_2', 1, 2, 'chung.tri@hcmut.edu.vn', N'Dạ thưa thầy, chúng em đã sẵn sàng!', '14-12-2024', 1),
('CE001_1', 1, 1, 'nguyen.thanh@hcmut.edu.vn', N'Có ai cần giúp đỡ môn Mạng Máy Tính không?', '14-12-2024', NULL),
('CE001_1', 1, 2, 'tu.quang@hcmut.edu.vn', N'Dạ em ạ, bài tập hơi khó!', '14-12-2024', 1),
('CE002_1', 1, 1, 'mai.thu@hcmut.edu.vn', N'Chào các bạn trong lớp Hệ Thống Nhúng!', '14-12-2024', NULL),
('CE002_1', 1, 2, 'anh.duc@hcmut.edu.vn', N'Cảm ơn thầy, lớp rất thú vị!', '14-12-2024', 1),
('ES001_1', 1, 1, 'pham.quyen@hcmut.edu.vn', N'Môn Quản Lý Môi Trường rất hay, cám ơn thầy cô!', '14-12-2024', NULL),
('ES001_1', 1, 2, 'quyen.thi@hcmut.edu.vn', N'Đồng ý, lớp học rất bổ ích!', '14-12-2024', 1),
('ES001_2', 1, 1, 'mai.thu@hcmut.edu.vn', N'Chào các bạn trong lớp Công Nghệ Xử Lý Nước!', '14-12-2024', NULL),
('ES001_2', 1, 2, 'anh.duc@hcmut.edu.vn', N'Cảm ơn thầy, lớp rất thú vị!', '14-12-2024', 1),
('ME001_1', 1, 1, 'huy.daoitman@hcmut.edu.vn', N'Hello mọi người!', '14-12-2024', NULL),
('ME001_1', 1, 2, 'chung.tri@hcmut.edu.vn', N'Chào thầy Huy đẹp trai!', '14-12-2024', 1),
('CHE002_1', 1, 1, 'tuan.an@hcmut.edu.vn', N'Lớp CHE002 sẵn sàng học chưa?', '14-12-2024', NULL),
('CHE002_1', 1, 2, 'chung.tri@hcmut.edu.vn', N'Dạ thưa thầy, chúng em đã sẵn sàng!', '14-12-2024', 1);
