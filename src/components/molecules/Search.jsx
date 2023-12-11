import React from "react";
import { Button, SearchInput, DropdownButton } from "../atoms";
import { options } from "../../utils";

const Search = (props) => {
  const { value, onClick } = props;

  return (
    <div className="flex items-center gap-3">
      <div className="flex border-2 rounded-lg border-gray-300 dark:border-gray-500 overflow-hidden">
        <DropdownButton options={options} />
        <SearchInput value={value} />
      </div>
      <Button onClick={onClick} text="Search" />
    </div>
  );
};

export default Search;
