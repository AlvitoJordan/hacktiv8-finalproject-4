import { useState } from "react";

const SubNavHooks = (state) => {
  const [active, setActive] = useState(state);

  const handleClick = (item) => {
    setActive(item);
    console.log(item);
  };

  return { active, handleClick };
};

export default SubNavHooks;
