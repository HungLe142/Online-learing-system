const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    so_dien_thoai: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    ho_ten: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ngay_sinh: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gioi_tinh: {
      type: DataTypes.ENUM("Nam", "Nữ", "Khác"),
      allowNull: false,
    },
    mat_khau: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    quyen: {
      type: DataTypes.ENUM("Admin", "Sinh viên", "Giảng viên"),
      allowNull: false,
    },
  },
  {
    tableName: "User", 
    timestamps: false, 
  }
);

module.exports = User;
