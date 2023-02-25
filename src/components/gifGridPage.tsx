import useSWR from "swr";
import { Gif } from "@/@types";
import Image from "next/image";

const fetcher = (...args: any[]) => {
  // @ts-ignore
  return fetch(...args).then((res) => res.json());
};

export function GifGridPage(props: { term: string; page: number }) {
  const { term, page } = props;
  let url = `/api/gifs/trending?page=${page}`;
  if (term && term !== "trending") {
    url = `/api/gifs/search?term=${term}&page=${page}`;
  }
  const { data, error, isLoading } = useSWR(url, fetcher);

  /**
   * Renders the gifs that have been loaded
   */
  const renderLoadedGifs = () =>
    data.map((gif: Gif) => (
      <Image
        src={`https://i.giphy.com/media/${gif.id}/giphy.webp`}
        className="w-full"
        key={gif.id}
        width={gif.images.original.width}
        height={gif.images.original.height}
        alt={gif.title}
      />
    ));

  /**
   * Render loading placeholders
   */
  const renderLoadingPlaceholders = () =>
    Array(24)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          className="h-64 w-full animate-pulse bg-gradient-to-tl from-purple-800 to-pink-600"
        />
      ));

  return (
    <div className="m-0 gap-0 sm:columns-1 md:columns-4">
      {isLoading && renderLoadingPlaceholders()}
      {!isLoading && data && renderLoadedGifs()}
    </div>
  );
}
