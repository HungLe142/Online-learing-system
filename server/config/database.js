const { Sequelize } = require("sequelize");

// Kết nối tới SQL Server
const sequelize = new Sequelize("ELS", "adminOLS", "1944!#ASDF!a", {
  host: "server241cs.database.windows.net",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true, // Đặt true nếu sử dụng Azure hoặc cần mã hóa
      trustServerCertificate: true, // Đặt true nếu dùng local
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối cơ sở dữ liệu thành công!");
  })
  .catch((err) => {
    console.error("Không thể kết nối cơ sở dữ liệu:", err);
  });

module.exports = sequelize;
