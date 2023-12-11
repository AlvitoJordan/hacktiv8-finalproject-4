import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchingHooks = (state) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(state);
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setShow(!show);
  };

  const handleClick = (id) => {
    setShow(false);
    navigate(`/detail/${id}`);
  };

  return { searchValue, handleInputChange, handleClick };
};

export default SearchingHooks;
