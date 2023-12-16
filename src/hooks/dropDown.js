import { useEffect, useRef, useState } from "react";
import { options } from "../utils";

const DropdownHooks = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(options[0].name);
  const dropdownRef = useRef();

  const handleClick = (option) => {
    setSelected(option);
  };

  const dropdownToogle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return {
    show,
    selected,
    setSelected,
    setShow,
    handleClick,
    dropdownToogle,
    dropdownRef,
  };
};

export default DropdownHooks;
