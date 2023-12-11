import React from "react";
import { SubNavHooks } from "../../hooks";
import { Gap, ListText, Text } from "../atoms";

const SubnavButton = ({ subNav, movie }) => {
  const { active, handleClick } = SubNavHooks(subNav[0].name);
  return (
    <>
      {subNav.map((value) => (
        <button
          onClick={() => handleClick(value.name)}
          className={`${
            active === value.name ? "border-b-2 border-red " : null
          } px-4 py-2 text-gray-500 dark:text-gray-200 focus:outline-none`}
          key={value.id}
        >
          {value.name}
        </button>
      ))}
      <div className="max-w border-t-2 border-darkRed text-gray-500 dark:text-gray-200">
        <Gap size={10} />
        {active === subNav[0].name && <Text text={movie?.Plot} />}
        {active === subNav[1].name && <ListText movie={movie} />}
      </div>
    </>
  );
};

export default SubnavButton;
