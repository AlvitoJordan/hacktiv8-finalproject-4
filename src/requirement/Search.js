import React, { useEffect, useRef, useState } from "react";
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
  const [showlist, setShowList] = useState(false);
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

  const listRef = useRef(null);

  useEffect(() => {
    if (searchValue) {
      setShowList(true);
    } else {
      setShowList(false);
    }
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchValue]);

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
      {showlist && (
        <div ref={listRef}>
          <ButtonList movie={movieData.movies} />
        </div>
      )}
    </>
  );
};

export default Search;
