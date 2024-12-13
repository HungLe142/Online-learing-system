CREATE PROCEDURE Tao_Giang_Vien (
    @ma_giang_vien VARCHAR(20),
    @user_id INT,
    @chuyen_nganh VARCHAR(255),
    @khoa_id INT,
    @email NVARCHAR(255),
    @so_dien_thoai VARCHAR(20),
    @ho_ten NVARCHAR(255),
    @ngay_sinh DATE,
    @gioi_tinh VARCHAR(10),
    @mat_khau NVARCHAR(255),
    @quyen NVARCHAR(20),
    @dia_chi NVARCHAR(255)
)
AS
BEGIN
    INSERT INTO [User] (user_id, email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, dia_chi, mat_khau, quyen)
    VALUES (@user_id, @email, @so_dien_thoai, @ho_ten, @ngay_sinh, @gioi_tinh, @dia_chi, @mat_khau, @quyen);

    INSERT INTO GIANG_VIEN (ma_giang_vien, user_id, chuyen_nganh, khoa_id)
    VALUES (@ma_giang_vien, @user_id, @chuyen_nganh, @khoa_id);
END;
