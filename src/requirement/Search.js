import React from "react";
import {
  Button,
  SearchInput,
  DropdownButton,
  ButtonList,
} from "../components/atoms";
import { options } from "../utils";
import { DropdownHooks, SearchingHooks } from "../hooks";
import { FetchSearch } from "../services";

const Search = ({ onSearch }) => {
  const { searchValue, handleInputChange } = SearchingHooks("");
  const { selected, handleClick } = DropdownHooks();
  const movieData = FetchSearch(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue, selected);
  };

  const handleDropdownItemClick = (selectedOption) => {
    handleClick(selectedOption.name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <div className="flex border-2 rounded-lg border-gray-300 dark:border-gray-500 overflow-hidden">
            <DropdownButton
              options={options}
              select={selected}
              onClick={handleDropdownItemClick}
            />
            <SearchInput value={searchValue} onChange={handleInputChange} />
          </div>
          <Button type="submit" text="Search" />
        </div>
      </form>
      {searchValue && <ButtonList movie={movieData.movies} />}
    </>
  );
};

export default Search;
