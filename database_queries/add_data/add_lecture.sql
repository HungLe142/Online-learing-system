-- Tạo Giang vien 1
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV001',
    @user_id = 11,
    @chuyen_nganh = 'Information technology',
    @khoa_id = 1,
    @email = 'gv1@example.com',
    @so_dien_thoai = '0123456780',
    @ho_ten = 'Nguyen Van Lam',
    @ngay_sinh = '1980-01-01',
    @gioi_tinh = 'Male',
    @mat_khau = 'password1',
    @quyen = 'Lecture';

-- Tạo Giang vien 2
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV002',
    @user_id = 12,
    @chuyen_nganh = 'Software Engineering',
    @khoa_id = 1,
    @email = 'gv2@example.com',
    @so_dien_thoai = '0123456781',
    @ho_ten = 'Le Thi Lien',
    @ngay_sinh = '1982-02-02',
    @gioi_tinh = 'Female',
    @mat_khau = 'password2',
    @quyen = 'Lecture';

-- Tạo Giang vien 3
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV003',
    @user_id = 13,
    @chuyen_nganh = 'Information system',
    @khoa_id = 1,
    @email = 'gv3@example.com',
    @so_dien_thoai = '0123456782',
    @ho_ten = 'Tran Van Hung',
    @ngay_sinh = '1984-03-03',
    @gioi_tinh = 'Male',
    @mat_khau = 'password3',
    @quyen = 'Lecture';

-- Faculty of Electrical Engineering
-- Lecturer 1
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV004',
    @user_id = 14,
    @chuyen_nganh = 'Telecommunications',
    @khoa_id = 2,
    @email = 'gv4@example.com',
    @so_dien_thoai = '0123456783',
    @ho_ten = 'Nguyen Van Dong',
    @ngay_sinh = '1980-04-04',
    @gioi_tinh = 'Male',
    @mat_khau = 'password4',
    @quyen = 'Lecture';

-- Lecturer 2
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV005',
    @user_id = 15,
    @chuyen_nganh = 'Electrical Engineering',
    @khoa_id = 2,
    @email = 'gv5@example.com',
    @so_dien_thoai = '0123456784',
    @ho_ten = 'Le Thi Hong',
    @ngay_sinh = '1982-05-05',
    @gioi_tinh = 'Female',
    @mat_khau = 'password5',
    @quyen = 'Lecture';

-- Faculty of Environmental Science
-- Lecturer 1
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV006',
    @user_id = 16,
    @chuyen_nganh = 'Life Sciences',
    @khoa_id = 3,
    @email = 'gv6@example.com',
    @so_dien_thoai = '0123456785',
    @ho_ten = 'Tran Van Sang',
    @ngay_sinh = '1983-06-06',
    @gioi_tinh = 'Male',
    @mat_khau = 'password6',
    @quyen = 'Lecture';

-- Lecturer 2
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV007',
    @user_id = 17,
    @chuyen_nganh = 'Environmental Science',
    @khoa_id = 3,
    @email = 'gv7@example.com',
    @so_dien_thoai = '0123456786',
    @ho_ten = 'Pham Thi Nguyen',
    @ngay_sinh = '1984-07-07',
    @gioi_tinh = 'Female',
    @mat_khau = 'password7',
    @quyen = 'Lecture';

-- Faculty of Chemical Engineering
-- Lecturer 1
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV008',
    @user_id = 18,
    @chuyen_nganh = 'Chemical Engineering',
    @khoa_id = 4,
    @email = 'gv8@example.com',
    @so_dien_thoai = '0123456787',
    @ho_ten = 'Hoang Van Minh',
    @ngay_sinh = '1985-08-08',
    @gioi_tinh = 'Male',
    @mat_khau = 'password8',
    @quyen = 'Lecture';

-- Lecturer 2
EXEC Tao_Giang_Vien 
    @ma_giang_vien = 'GV009',
    @user_id = 19,
    @chuyen_nganh = 'Chemical Engineering',
    @khoa_id = 4,
    @email = 'gv9@example.com',
    @so_dien_thoai = '0123456788',
    @ho_ten = 'Do Thi Tuyet',
    @ngay_sinh = '1986-09-09',
    @gioi_tinh = 'Female',
    @mat_khau = 'password9',
    @quyen = 'Lecture';
