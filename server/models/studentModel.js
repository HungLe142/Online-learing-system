const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Student = sequelize.define("Student", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
    },
    // Các thuộc tính khác
});

const ThamGia = sequelize.define("ThamGia", {
    tham_gia_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ma_sinh_vien: {
        type: DataTypes.STRING,
    },
    lop_id: {
        type: DataTypes.INTEGER,
    },
    diem_id: {
        type: DataTypes.INTEGER,
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'THAM_GIA'
});

const Lop = sequelize.define("Lop", {
    lop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ten_lop: {
        type: DataTypes.STRING,
    },
    ma_mon_hoc: {
        type: DataTypes.STRING,
    },
    hoc_ky: {
        type: DataTypes.STRING,
    },
    ma_giang_vien: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
    tableName: 'LOP'
});

const GiangVien = sequelize.define("GiangVien", {
    ma_giang_vien: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    chuyen_nganh: {
        type: DataTypes.STRING,
    },
    khoa_id: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false,
    tableName: 'GIANG_VIEN'
});

const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    so_dien_thoai: {
        type: DataTypes.STRING,
    },
    ho_ten: {
        type: DataTypes.STRING,
    },
    ngay_sinh: {
        type: DataTypes.DATE,
    },
    gioi_tinh: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['Male', 'Female']]
        }
    },
    dia_chi: {
        type: DataTypes.STRING,
    },
    mat_khau: {
        type: DataTypes.STRING,
    },
    quyen: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['Admin', 'Student', 'Lecture']]
        }
    }
}, {
    timestamps: false,
    tableName: 'User'
});

// Định nghĩa liên kết
Student.hasMany(ThamGia, { foreignKey: 'ma_sinh_vien' });
ThamGia.belongsTo(Student, { foreignKey: 'ma_sinh_vien' });

ThamGia.belongsTo(Lop, { foreignKey: 'lop_id' });
Lop.hasMany(ThamGia, { foreignKey: 'lop_id' });

Lop.belongsTo(GiangVien, { foreignKey: 'ma_giang_vien' });
GiangVien.hasMany(Lop, { foreignKey: 'ma_giang_vien' });

GiangVien.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(GiangVien, { foreignKey: 'user_id' });

module.exports = { Student, ThamGia, Lop, GiangVien, User };
