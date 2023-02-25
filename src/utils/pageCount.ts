import { NextApiRequest } from "next";

/**
 * Extract page count from request query
 */
export const extractPageCount = (req: NextApiRequest) => {
  const { page } = req.query;
  let pageCount = parseInt(page as string) - 1;
  return pageCount;
};
