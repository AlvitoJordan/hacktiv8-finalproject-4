import React from "react";
import { Button, SearchInput, DropdownButton, ButtonList } from "../atoms";
import { options } from "../../utils";
import { SearchingHooks } from "../../hooks";
import { FetchSearch } from "../../services";

const Search = (props) => {
  const { onClick } = props;
  const { searchValue, handleInputChange } = SearchingHooks("");
  const movieData = FetchSearch(searchValue);

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex border-2 rounded-lg border-gray-300 dark:border-gray-500 overflow-hidden">
          <DropdownButton options={options} />
          <SearchInput value={searchValue} onChange={handleInputChange} />
        </div>
        <Button onClick={onClick} text="Search" />
      </div>
      {searchValue && <ButtonList movie={movieData} />}
    </>
  );
};

export default Search;
