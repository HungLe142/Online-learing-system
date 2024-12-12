import React, { useState } from 'react';

const SearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="relative min-h-[326px] flex items-center justify-center p-8">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf118fbedfa757ee5a53e776f5b1ec5ee1d9b3db578536608acaf9cb0482e48?placeholderIfAbsent=true&apiKey=2e91b678645640cfb9bdb9d816fad104"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <form className="relative z-10 bg-white p-4 rounded-lg w-full max-w-[1319px] flex gap-4 shadow-md" onSubmit={handleSearch}>
        <input
          type="search"
          id="courseSearch"
          className="flex-1 p-2 text-lg text-[#696984] border-none focus:outline-none focus:ring-2 focus:ring-[#49BBBD] rounded-md"
          placeholder="Search your favourite course"
          aria-label="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#49BBBD] text-white py-3 px-6 text-xl font-bold rounded-3xl hover:bg-[#3da7a9] focus:outline-none focus:ring-3 focus:ring-[#2d8a8c]"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchSection;
