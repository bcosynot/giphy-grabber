import type { NextApiRequest, NextApiResponse } from "next";
import { Gif } from "@/@types";
import { extractPageCount } from "@/utils/pageCount";

/**
 * Get gifs from Giphy API based on search term.
 *
 * Using our own API instead of directly calling the Giphy API from the client
 * allows us to
 * 1. hide our API key from the client and if necessary
 * 2. change the GIF provider without having to change the client code
 * 3. Implement caching in other systems if necessary
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Gif[]>
) {
  const { term } = req.query;
  const offset = extractPageCount(req) * 25;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${term}&limit=25&offset=${offset}&rating=g&lang=en`;
  const response = await fetch(url);
  const { data } = await response.json();
  res.status(200).json(data);
}
