import { useState } from "react";

const DropdownHooks = (initialOption) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(initialOption);

  const handleClick = (option) => {
    setSelected(option);
    setShow(false);
  };

  const dropdownToogle = () => {
    setShow(!show);
  };

  return {
    show,
    selected,
    handleClick,
    dropdownToogle,
  };
};

export default DropdownHooks;
