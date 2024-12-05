const db = require('../database');
const { Request, TYPES } = require('tedious');

// Lỗi ở file này!!!
const getUserById = (student_id, callback) => {
    console.log(student_id)
    const query = 'SELECT * FROM SINH_VIEN WHERE ma_sinh_vien = @student_id'; 
    
    const request = new Request(query, (err, rowCount, rows) => {
        if (err) {
           return callback(err);
        }
        const results = [];
        rows.forEach((columns) => {
            const result = {};
            columns.forEach((column) => {
                result[column.metadata.colName] = column.value;
            });
            results.push(result);
        });

        callback(null, results[0] || null);
    });

    // Thêm tham số
    request.addParameter('student_id', TYPES.VarChar, student_id);

    // Thực hiện truy vấn
    db.execSql(request);

};

module.exports = { getUserById };
