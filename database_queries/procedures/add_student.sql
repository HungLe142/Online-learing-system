CREATE PROCEDURE Tao_Sinh_Vien (
    @ma_sinh_vien VARCHAR(20),
    @user_id INT,
    @email NVARCHAR(255),
    @so_dien_thoai VARCHAR(20),
    @ho_ten NVARCHAR(255),
    @ngay_sinh DATE,
    @gioi_tinh VARCHAR(10),
    @mat_khau NVARCHAR(255),
    @quyen NVARCHAR(20),
    @dia_chi NVARCHAR(255),
    @khoa_id INT,
    @GPA FLOAT,
    @so_tin_chi_tich_luy INT
)
AS
BEGIN
    -- Bắt đầu transaction
    BEGIN TRANSACTION;

    BEGIN TRY
        -- Tạo user trước
       INSERT INTO [User] (user_id, email, so_dien_thoai, ho_ten, ngay_sinh, gioi_tinh, dia_chi, mat_khau, quyen)
       VALUES (@user_id, @email, @so_dien_thoai, @ho_ten, @ngay_sinh, @gioi_tinh, @dia_chi, @mat_khau, @quyen);

        -- Tạo sinh viên
        INSERT INTO SINH_VIEN (ma_sinh_vien, user_id, khoa_id, GPA, so_tin_chi_tich_luy)
        VALUES (@ma_sinh_vien, @user_id, @khoa_id, @GPA, @so_tin_chi_tich_luy);

        -- Commit transaction nếu không có lỗi
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        -- Rollback transaction nếu có lỗi
        ROLLBACK TRANSACTION;

        -- Ném lại lỗi để xử lý tiếp
        THROW;
    END CATCH;
END;
