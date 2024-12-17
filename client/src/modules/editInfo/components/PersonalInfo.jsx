import * as React from "react";

export function PersonalInfo({ birthDate, phoneNumber, onChange }) {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between mt-5 max-w-full w-[794px]">
        <div>Birth date</div>
        <div>Phone Number</div>
      </div>
      <div className="flex flex-wrap gap-10 mt-6 text-neutral-400 max-md:max-w-full">
        <div className="grow px-5 pt-4 pb-7 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300 w-fit max-md:px-5 max-md:max-w-full">
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none"
            aria-label="Birth date"
          />
        </div>
        <div className="grow px-5 pt-4 pb-8 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300 w-fit max-md:px-5 max-md:max-w-full">
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none"
            aria-label="Phone number"
          />
        </div>
      </div>
    </>
  );
}
