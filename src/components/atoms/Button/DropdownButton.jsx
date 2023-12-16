import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DropdownHooks } from "../../../hooks";

const DropdownButton = ({ options, onClick, select }) => {
  const { show, dropdownToogle, setShow, dropdownRef } = DropdownHooks();
  return (
    <div ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center justify-between border-r-2 p-2 w-28 gap-2 cursor-pointer border-gray-300 dark:border-gray-500 bg-transparent text-gray-400 focus:outline-none"
        onClick={dropdownToogle}
      >
        {select}
        {show ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {show && (
        <div className="absolute z-10 mt-2 rounded-lg bg-white dark:bg-darkRed shadow-lg focus:outline-none overflow-hidden">
          <div>
            {options.map((option) => (
              <button
                type="button"
                key={option.id}
                onClick={() => {
                  onClick(option);
                  setShow(false);
                }}
                className="block w-28 py-2 text-gray-500 dark:text-gray-200 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
