const userModel = require('../models/userModel');

const getUserInfo = (student_id, callback) => {
    userModel.getUserById(student_id, (err, user) => {
        if (err) return callback(err);

        if (!user) {
            return callback(new Error('Không tìm thấy người dùng'));
        }
    })
};

module.exports = { getUserInfo };
