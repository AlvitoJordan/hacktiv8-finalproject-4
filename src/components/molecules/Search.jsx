import React from "react";
import { Button, SearchInput } from "../atoms";

const Search = (props) => {
  const { value, onChange, onPress } = props;
  return (
    <div className="flex items-center gap-3">
      <SearchInput value={value} onChange={onChange} />
      <Button onPress={onPress} text="Search" />
    </div>
  );
};

export default Search;
