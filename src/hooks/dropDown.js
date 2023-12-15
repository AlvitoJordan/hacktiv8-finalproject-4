import { useState } from "react";
import { options } from "../utils";

const DropdownHooks = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(options[0].name);

  const handleClick = (option) => {
    setSelected(option);
    setShow(false);
  };

  const dropdownToogle = () => {
    setShow(!show);
  };

  return {
    show,
    setSelected,
    selected,
    handleClick,
    dropdownToogle,
  };
};

export default DropdownHooks;
