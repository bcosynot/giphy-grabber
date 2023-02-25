import { useEffect, useState } from "react";
import { GifGridPage } from "@/components/gifGridPage";

export function GifGrid(props: { term: string }) {
  const { term } = props;
  const [pageCount, setPageCount] = useState<number>(1);

  /**
   * Adds a new page to the gif grid pages when the user scrolls to the bottom of the page
   */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setPageCount(pageCount + 1);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, [pageCount]);

  /**
   * Render all the pages
   */
  const renderGridPages = () => {
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
      pages.push(<GifGridPage page={i + 1} term={term} key={term + "-" + i} />);
    }
    return pages;
  };

  return <div className="mt-3">{renderGridPages()}</div>;
}
