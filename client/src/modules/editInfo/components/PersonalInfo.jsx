import * as React from "react";

export function PersonalInfo({ birthDate, phoneNumber, onChange }) {
  return (
    <div className="flex flex-wrap justify-between gap-5 mt-5 w-full max-w-full">
      <div className="flex flex-col flex-grow">
        <label htmlFor="birthDate" className="text-left">Birth date</label>
        <div className="px-5 pt-4 pb-7 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300">
          <input
            type="date" // Đổi type thành date để trình duyệt hiển thị widget chọn ngày
            id="birthDate"
            value={birthDate}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none text-neutral-400"
            aria-label="Birth date"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <label htmlFor="phoneNumber" className="text-left">Phone Number</label>
        <div className="px-5 pt-4 pb-7 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300">
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none text-neutral-400"
            aria-label="Phone number"
          />
        </div>
      </div>
    </div>
  );
}
