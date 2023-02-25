import { SearchForm } from "@/components/searchForm";
import { RecentSearches } from "@/components/recentSearches";
import Image from "next/image";

function Logo() {
  return (
    <nav className="items-left flex">
      <Image
        src="/logo.png"
        alt="Giphy Grabber"
        className="h-[29px] w-[25px]"
        height={29}
        width={25}
      />
      <h3 className="ml-3 text-xl font-black uppercase text-white">
        Giphy Grabber
      </h3>
    </nav>
  );
}

export function Header() {
  return (
    <header className="container px-3 pt-3 md:px-0">
      <Logo />
      <SearchForm />
      <RecentSearches />
    </header>
  );
}
