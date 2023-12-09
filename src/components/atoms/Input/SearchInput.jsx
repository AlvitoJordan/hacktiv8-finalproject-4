import React from "react";

const SearchInput = (props) => {
  const { value, onChange } = props;
  return (
    <input
      className="bg-transparent text-gray-500 dark:text-gray-200 border-2 rounded-lg border-gray-300 dark:border-gray-500 p-2 focus:outline-none focus:border-red w-[300px]"
      type="search"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
