/**
 * Contains state that needs to be shared between components
 * for the gif search feature
 */

import { atom } from "recoil";

/**
 * searchInputState: the input value of the search bar
 */
export const searchInputState = atom({
  key: "searchInput",
  default: "",
});

/**
 * searchTermState: the search term to be used in the API call
 */
export const searchTermState = atom({
  key: "searchTerm",
  default: "",
});
