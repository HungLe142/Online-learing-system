ALTER TABLE GIANG_VIEN
DROP CONSTRAINT FK_User_GiangVien;

ALTER TABLE GIANG_VIEN
DROP CONSTRAINT FK_Khoa_GiangVien;

ALTER TABLE MON_HOC
DROP CONSTRAINT FK_MonHoc_Khoa;

ALTER TABLE DIEM
DROP CONSTRAINT FK_diem_tham_gia;

ALTER TABLE SINH_VIEN
DROP CONSTRAINT FK_User;

ALTER TABLE SINH_VIEN
DROP CONSTRAINT FK_Khoa;

--ALTER TABLE SINH_VIEN
--DROP CONSTRAINT FK_Diem;

ALTER TABLE LOP
DROP CONSTRAINT FK_Lop_MonHoc;

ALTER TABLE LOP
DROP CONSTRAINT FK_Lop_HocKy;

ALTER TABLE LOP
DROP CONSTRAINT FK_Lop_GiangVien;

ALTER TABLE THAM_GIA
DROP CONSTRAINT FK_ThamGia_SinhVien;

ALTER TABLE THAM_GIA
DROP CONSTRAINT FK_ThamGia_Lop;


ALTER TABLE DIEN_DAN
DROP CONSTRAINT FK_DienDan_Lop;

ALTER TABLE TIN_NHAN
DROP CONSTRAINT FK_TinNhan_User;

ALTER TABLE TIN_NHAN
DROP CONSTRAINT FK_TinNhan_DienDan;

ALTER TABLE QUAN_TRI_VIEN
DROP CONSTRAINT FK_QuanTri_User;


ALTER TABLE DANG_KY_MON_HOC
DROP CONSTRAINT FK_DangKy_SinhVien;

ALTER TABLE DANG_KY_MON_HOC
DROP CONSTRAINT FK_DangKy_MonHoc;

--ALTER TABLE MON_SINH_VIEN_HOC
--DROP CONSTRAINT FK_MonSinhVienHoc_SinhVien;

--ALTER TABLE MON_SINH_VIEN_HOC
--DROP CONSTRAINT FK_MonSinhVienHoc_MonHoc;

--ALTER TABLE MON_SINH_VIEN_HOC
--DROP CONSTRAINT FK_MonSinhVienHoc_HocKy;

--ALTER TABLE MON_SINH_VIEN_HOC
--DROP CONSTRAINT FK_MonSinhVienHoc_Diem;
