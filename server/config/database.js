const { Sequelize } = require("sequelize");

// Kết nối tới SQL Server
const sequelize = new Sequelize("server241cs.database.windows.net", "adminOLS", "1944!#ASDF!a", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true, // Đặt true nếu sử dụng Azure hoặc cần mã hóa
      trustServerCertificate: true, // Đặt true nếu dùng local
    },
  },
});

module.exports = sequelize;
