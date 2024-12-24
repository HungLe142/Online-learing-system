import * as React from "react";

export default function ContentCard({ imageUrl, title, url }) {
  // Ensure the URL is fully qualified
  const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;

  return (
    <a href={fullUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col">
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
        <div className="self-center mt-16 text-lg tracking-wide leading-relaxed text-center max-md:mt-10">
          {url}
        </div>
      </div>
    </a>
  );
}
