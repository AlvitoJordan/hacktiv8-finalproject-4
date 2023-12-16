import React, { createContext, useContext } from "react";
import SearchingHooks from "./searching";
import DropdownHooks from "./dropDown";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { searchValue, setSearchValue } = SearchingHooks("");
  const { selected, setSelected } = DropdownHooks();

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selected,
        setSelected,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
