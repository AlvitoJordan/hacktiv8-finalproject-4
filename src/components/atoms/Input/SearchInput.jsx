import React from "react";

const SearchInput = (props) => {
  const { value, onChange } = props;
  return (
    <input
      className="bg-transparent text-gray-500 border-2 rounded-lg border-gray-300 p-2 focus:outline-none focus:border-red w-full"
      type="search"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
