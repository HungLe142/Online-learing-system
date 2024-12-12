import * as React from "react";

export default function ContentCard({ imageUrl, title, requirement }) {
  return (
    <div className="flex flex-col px-4 pt-4 pb-28 mx-auto w-full font-medium text-gray-500 bg-white rounded-3xl shadow-[0px_19px_47px_rgba(47,50,125,0.1)] max-md:pb-24 max-md:mt-10">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-contain w-full rounded-3xl aspect-[1.34]"
      />
      <div className="flex gap-3 self-start mt-9 text-sm tracking-wide leading-relaxed whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66e2b55012f5b0c6e65053aeb05714898a6a32cbfc2c9560b89e3aa2bc85ed9b?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
          alt=""
          className="object-contain shrink-0 self-start rounded-sm aspect-[1.28] w-[23px]"
        />
        <div>Download</div>
      </div>
      <div className="self-center mt-9 text-2xl text-center text-slate-800">
        {title}
      </div>
      <div className="self-center mt-16 text-lg tracking-wide leading-relaxed text-center max-md:mt-10">
        {requirement}
      </div>
    </div>
  );
}