import React from 'react';

const Dialog = ({ visible, title, onHide, onSubmit, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center transition-all ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {children}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded"
            onClick={onHide}
          >
            Hủy
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onSubmit}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
