import * as React from "react";

export function InputField({ label, value, id, type = "text", centerAligned }) {
  return (
    <>
      <label 
        htmlFor={id} 
        className={`${centerAligned ? 'self-center' : 'self-start'} mt-5 max-md:ml-0.5`}
      >
        {label}
      </label>
      <div 
        className={`${
          centerAligned 
            ? 'self-center px-16 w-[616px]' 
            : 'px-5 w-full'
        } pt-4 pb-6 mt-6 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300 text-neutral-400 max-md:px-5 max-md:max-w-full`}
      >
        <input
          type={type}
          id={id}
          value={value}
          className="w-full bg-transparent border-none outline-none"
          aria-label={label}
        />
      </div>
    </>
  );
}