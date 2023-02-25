import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchInputState, searchTermState } from "@/states/gifSearch";

export function SearchForm() {
  const [searchValue, setSearchValue] = useRecoilState(searchInputState);
  const setSearchTerm = useSetRecoilState(searchTermState);

  return (
    <form
      className="mt-3 flex h-[52px] w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchTerm(searchValue);
      }}
    >
      <input
        type="text"
        className="[text-15px] grow p-3 font-arial"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="h-[52px] w-[52px] flex-none rotate-90 bg-gradient-to-tl from-purple-800 to-pink-600 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="m-auto h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}
