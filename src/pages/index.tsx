import Head from "next/head";
import { Lato } from "@next/font/google";
import { GifGrid } from "@/components/gifGrid";
import { useRecoilValue } from "recoil";
import { searchTermState } from "@/states/gifSearch";
import { Header } from "@/components/header";

// noinspection JSUnusedLocalSymbols,SpellCheckingInspection
const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const searchTerm = useRecoilValue(searchTermState);

  return (
    <>
      <Head>
        <title>Giphy Grabber</title>
        <meta name="description" content="Search and filter gifs!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="container px-3 pt-3 md:px-0">
        <div className="mt-6 text-gray-400">
          <span>Showing results for: </span>
          <span className="font-bold">
            {searchTerm ? searchTerm : "trending"}
          </span>
        </div>
        <GifGrid term={searchTerm} />
      </main>
    </>
  );
}
