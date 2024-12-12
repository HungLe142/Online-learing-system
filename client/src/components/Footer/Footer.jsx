import * as React from "react";
export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-20 py-7 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[562px]">
          <div className="flex flex-col items-start pr-14 pl-8 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex gap-9 items-center text-2xl font-semibold tracking-wider text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b69d09096324a39744a98b431ea460e89a04781f795ca403f6f499501d0c544?placeholderIfAbsent=true&apiKey=673b43bfd43741dfb5fb4f80631ec9b7"
                alt="University Logo"
                className="object-contain shrink-0 self-stretch max-w-full aspect-[1.44] w-[212px]"
              />
              <div className="shrink-0 self-stretch my-auto w-px border border-gray-500 border-solid h-[75px]" />
              <div className="self-stretch my-auto basis-auto">ACADEMIC</div>
            </div>
            <div className="mt-20 ml-4 text-2xl font-medium tracking-wider text-center text-slate-400 max-md:mt-10 max-md:max-w-full">
              WELL COME TO OUR UNIVERSITY
            </div>
          </div>
          <div className="self-center mt-7 text-2xl tracking-wider text-center text-slate-400">
            © 2225 DA HTTT
          </div>
        </div>
      </div>
    </div>
  );
}
