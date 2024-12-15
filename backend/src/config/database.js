import sql from 'mssql';

// Cấu hình kết nối với SQL Server
const config = {
    user: 'sa',        // Tên người dùng SQL Server
    password: 'huy',    // Mật khẩu SQL Server
    server: 'localhost',          // Địa chỉ máy chủ SQL Server (có thể là địa chỉ IP hoặc 'localhost')
    database: 'Database',    // Tên cơ sở dữ liệu
    options: {
        encrypt: true,            // Sử dụng mã hóa (nếu cần)
        trustServerCertificate: true // Tin cậy chứng chỉ máy chủ (chỉ cần khi không sử dụng chứng chỉ chính thức)
    }
};

// Hàm kết nối đến SQL Server và trả về kết nối pool
export const connectToDb = async () => {
    try {
        const pool = await sql.connect(config);
        console.log('Kết nối thành công đến SQL Server');
        return pool; // Trả về pool kết nối
    } catch (err) {
        console.error('Lỗi kết nối:', err);
        throw err; // Ném lỗi nếu kết nối thất bại
    }
};
