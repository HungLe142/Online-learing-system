import * as React from "react";
import { useAuth } from "../../../hooks/useAuth";

export default function ContentCard({ imageUrl, title, url, onClose }) {
  const { user } = useAuth();
  // Ensure the URL is fully qualified
  const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện điều hướng
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    onClose(title);
  };

  return (
    <a href={fullUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col relative">
      {user.role !== 'student' && (
        <div className="absolute top-2 right-2">
          <button
            onClick={handleButtonClick}
            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-700"
            aria-label="Close"
            style={{ width: '40px', height: '40px', fontSize: '20px' }}
          >
            &times;
          </button>
        </div>
      )}
      <div className="flex flex-col px-4 pt-4 pb-28 mx-auto w-full font-medium text-gray-500 bg-white rounded-3xl shadow-[0px_19px_47px_rgba(47,50,125,0.1)] max-md:pb-24 max-md:mt-10">
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="object-contain w-full rounded-3xl aspect-[1.34]"
        />
        <div className="self-center mt-9 text-2xl text-center text-slate-800">
          {title}
        </div>
        <div className="self-center mt-16 text-lg tracking-wide leading-relaxed text-center max-md:mt-10 overflow-hidden">
          <span
            style={{
              display: 'block',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              padding: '0 10px',
            }}
          >
            {/* {fullUrl} */}
          </span>
        </div>
      </div>
    </a>
  );
}
