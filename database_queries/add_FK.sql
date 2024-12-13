ALTER TABLE GIANG_VIEN
	ADD CONSTRAINT FK_User_GiangVien FOREIGN KEY (user_id) REFERENCES [USER](user_id)  , -- Ràng buộc khóa ngoại liên kết với bảng USER
    CONSTRAINT FK_Khoa_GiangVien FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id)  ; -- Ràng buộc khóa ngoại liên kết với bảng KHOA

ALTER TABLE MON_HOC
    ADD CONSTRAINT FK_MonHoc_Khoa FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id)  ; -- Ràng buộc khóa ngoại liên kết với bảng KHOA

ALTER TABLE DIEM
	ADD CONSTRAINT FK_diem_tham_gia FOREIGN KEY (diem_id) REFERENCES THAM_GIA(diem_id);

ALTER TABLE SINH_VIEN
	ADD CONSTRAINT FK_User FOREIGN KEY (user_id) REFERENCES [User](user_id)  , -- Khóa ngoại liên kết bảng User
    CONSTRAINT FK_Khoa FOREIGN KEY (khoa_id) REFERENCES KHOA(khoa_id)  ; -- Khóa ngoại liên kết bảng KHOA
	--CONSTRAINT FK_Diem FOREIGN KEY (diem_id) REFERENCES DIEM(diem_id) /* */; -- Khóa ngoại liên kết bảng DIEM

ALTER TABLE LOP
	ADD CONSTRAINT FK_Lop_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc)  , -- Ràng buộc khóa ngoại đến MON_HOC
    CONSTRAINT FK_Lop_HocKy FOREIGN KEY (hoc_ky) REFERENCES HOC_KY(hoc_ky)  , -- Ràng buộc khóa ngoại đến HOC_KY
    CONSTRAINT FK_Lop_GiangVien FOREIGN KEY (ma_giang_vien) REFERENCES GIANG_VIEN(ma_giang_vien)  ; -- Ràng buộc khóa ngoại đến GIANG_VIEN

ALTER TABLE THAM_GIA
	ADD CONSTRAINT FK_ThamGia_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien)  , -- Ràng buộc khóa ngoại đến SINH_VIEN
    CONSTRAINT FK_ThamGia_Lop FOREIGN KEY (lop_id) REFERENCES LOP(lop_id); -- Ràng buộc khóa ngoại đến LOP

ALTER TABLE DIEN_DAN
	ADD CONSTRAINT FK_DienDan_Lop FOREIGN KEY (lop_id) REFERENCES LOP(lop_id)  ; -- Ràng buộc khóa ngoại đến LOP

ALTER TABLE TIN_NHAN
	ADD CONSTRAINT FK_TinNhan_User FOREIGN KEY (nguoi_gui_id) REFERENCES [USER](user_id)  ; -- Ràng buộc khóa ngoại đến USER

ALTER TABLE TIN_NHAN
	ADD CONSTRAINT FK_TinNhan_DienDan FOREIGN KEY (dien_dan_id) REFERENCES DIEN_DAN(dien_dan_id)  ; -- Ràng buộc khóa ngoại đến USER

ALTER TABLE QUAN_TRI_VIEN
	ADD CONSTRAINT FK_QuanTri_User FOREIGN KEY (user_id) REFERENCES [USER](user_id)  ; -- Ràng buộc khóa ngoại đến bảng USER

ALTER TABLE DANG_KY_MON_HOC
	ADD CONSTRAINT FK_DangKy_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien)  , -- Ràng buộc khóa ngoại đến bảng SINH_VIEN
    CONSTRAINT FK_DangKy_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc)  ; -- Ràng buộc khóa ngoại đến bảng MON_HOC

--ALTER TABLE MON_SINH_VIEN_HOC
	--ADD CONSTRAINT FK_MonSinhVienHoc_SinhVien FOREIGN KEY (ma_sinh_vien) REFERENCES SINH_VIEN(ma_sinh_vien)  , -- Ràng buộc khóa ngoại đến bảng SINH_VIEN
    --CONSTRAINT FK_MonSinhVienHoc_MonHoc FOREIGN KEY (ma_mon_hoc) REFERENCES MON_HOC(ma_mon_hoc)  , -- Ràng buộc khóa ngoại đến bảng MON_HOC
    --CONSTRAINT FK_MonSinhVienHoc_HocKy FOREIGN KEY (hoc_ky) REFERENCES HOC_KY(hoc_ky)  , -- Ràng buộc khóa ngoại đến bảng HOC_KY
   -- CONSTRAINT FK_MonSinhVienHoc_Diem FOREIGN KEY (diem_id) REFERENCES DIEM(diem_id)  ; -- Ràng buộc khóa ngoại đến bảng DIEM

-- Add FK constraint from LOP to HOC_KY