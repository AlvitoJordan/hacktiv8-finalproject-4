import React from "react";
import { Button, SearchInput } from "../atoms";

const Search = (props) => {
  const { value, onChange, onClick } = props;
  return (
    <div className="flex items-center gap-3">
      <SearchInput value={value} onChange={onChange} />
      <Button onClick={onClick} text="Search" />
    </div>
  );
};

export default Search;
