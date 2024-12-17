import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EnterGrades() {
  const { id } = useParams(); // Lấy ID sinh viên từ URL
  const [midtermGrade, setMidtermGrade] = useState('');
  const [projectGrade, setProjectGrade] = useState('');
  const [finalExamGrade, setFinalExamGrade] = useState('');
  const [assignmentGrade, setAssignmentGrade] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Thay vì 'history', sử dụng 'navigate'

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra nếu các điểm nhập vào hợp lệ (giả sử điểm là số từ 0 đến 100)
    if (
      midtermGrade < 0 || midtermGrade > 100 || isNaN(midtermGrade) ||
      projectGrade < 0 || projectGrade > 100 || isNaN(projectGrade) ||
      finalExamGrade < 0 || finalExamGrade > 100 || isNaN(finalExamGrade) ||
      assignmentGrade < 0 || assignmentGrade > 100 || isNaN(assignmentGrade)
    ) {
      setError('Điểm phải là một số hợp lệ từ 0 đến 100');
      return;
    }

    try {
      // Giả sử bạn có API để lưu điểm
      const response = await fetch(`/api/grades/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          midtermGrade,
          projectGrade,
          finalExamGrade,
          assignmentGrade,
        }),
      });

      if (response.ok) {
        navigate(-1); // Sau khi submit, chuyển về trang trước đó
      } else {
        setError('Đã có lỗi khi lưu điểm. Vui lòng thử lại.');
      }
    } catch (err) {
      setError('Lỗi kết nối, vui lòng thử lại sau.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Nhập điểm cho sinh viên {id}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="midtermGrade" className="font-medium text-lg">Điểm giữa kì:</label>
            <input
              type="number"
              id="midtermGrade"
              value={midtermGrade}
              onChange={(e) => setMidtermGrade(e.target.value)}
              placeholder="Nhập điểm giữa kì"
              className="mt-2 p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="projectGrade" className="font-medium text-lg">Điểm bài tập lớn:</label>
            <input
              type="number"
              id="projectGrade"
              value={projectGrade}
              onChange={(e) => setProjectGrade(e.target.value)}
              placeholder="Nhập điểm bài tập lớn"
              className="mt-2 p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="finalExamGrade" className="font-medium text-lg">Điểm cuối kì:</label>
            <input
              type="number"
              id="finalExamGrade"
              value={finalExamGrade}
              onChange={(e) => setFinalExamGrade(e.target.value)}
              placeholder="Nhập điểm cuối kì"
              className="mt-2 p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="assignmentGrade" className="font-medium text-lg">Điểm bài tập:</label>
            <input
              type="number"
              id="assignmentGrade"
              value={assignmentGrade}
              onChange={(e) => setAssignmentGrade(e.target.value)}
              placeholder="Nhập điểm bài tập"
              className="mt-2 p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}

          <button 
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Lưu điểm
          </button>
        </form>

        <button 
          onClick={() => navigate(-1)} // Quay lại trang trước đó
          className="w-full mt-4 py-3 bg-gray-300 text-black font-semibold rounded-lg hover:bg-gray-400 transition"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}

export default EnterGrades;
