import React from "react";

const SearchInput = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <input
        className="bg-transparent text-gray-500 dark:text-gray-200 p-2 focus:outline-none focus:border-red w-48 lg:w-64"
        type="search"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
