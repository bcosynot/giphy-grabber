import { useRecoilState, useSetRecoilState } from "recoil";
import { searchInputState, searchTermState } from "@/states/gifSearch";
import { useEffect, useState } from "react";

export function RecentSearches() {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [recentSearches, setRecentSearches] = useState<string[]>(["trending"]);
  const setSearchInput = useSetRecoilState(searchInputState);

  useEffect(() => {
    if (searchTerm) {
      // Add the search term to the recent searches list, if it's not already there
      setRecentSearches((prev) => {
        if (prev.includes(searchTerm)) {
          return prev;
        }
        return [searchTerm, ...prev];
      });
    }
  }, [searchTerm]);

  return (
    <div className="mt-3 flex w-full text-xs">
      <span className="h-[27px] w-[50px] shrink text-gray-500">
        Previous searches:
      </span>
      <div className="ml-3 grow flex-wrap pt-1 text-sky-400">
        {recentSearches.map((search) => (
          <a
            key={search}
            href="#"
            className="mr-3 flex-none underline hover:no-underline focus:no-underline"
            onClick={(e) => {
              e.preventDefault();
              setSearchTerm(search);
              setSearchInput(search === "trending" ? "" : search);
            }}
          >
            {search}
          </a>
        ))}
      </div>
    </div>
  );
}
