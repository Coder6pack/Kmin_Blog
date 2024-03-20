import Link from "@docusaurus/Link";
import React from "react";

export default function AsideFilter() {
  return (
    <div>
      <form className="flex border border-lineGray px-4 py-4 rounded-lg mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#9497af] "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="w-full outline-none ml-2 text-[#9497af]"
          type="text"
          placeholder="Search..."
        />
      </form>
      <div className="border-b border-b-lineGray font-bold pb-1 mb-5 text-xl">
        Topics
      </div>
      <div className="pb-6">
        <Link className="font-bold text-blue cursor-pointer hover:text-blue mb-6">
          All Topics
        </Link>
      </div>
      <div className="pb-6">
        <Link className="hover:text-blue cursor-pointer">Tutorial</Link>
      </div>

      <div className="pb-6">
        <Link className="hover:text-blue cursor-pointer">Insights</Link>
      </div>
      <div className="pb-6">
        <Link className="hover:text-blue cursor-pointer">
          Coding Principles
        </Link>
      </div>
    </div>
  );
}
