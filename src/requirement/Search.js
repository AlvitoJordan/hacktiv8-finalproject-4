import React from "react";
import {
  Button,
  SearchInput,
  DropdownButton,
  ButtonList,
} from "../components/atoms";
import { options } from "../utils";
import { SearchingHooks } from "../hooks";
import { FetchSearch } from "../services";

const Search = ({ onSearch }) => {
  const { searchValue, handleInputChange } = SearchingHooks("");
  const movieData = FetchSearch(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <div className="flex border-2 rounded-lg border-gray-300 dark:border-gray-500 overflow-hidden">
            <DropdownButton options={options} />
            <SearchInput value={searchValue} onChange={handleInputChange} />
          </div>
          <Button type="submit" text="Search" />
        </div>
      </form>
      {searchValue && <ButtonList movie={movieData} />}
    </>
  );
};

export default Search;