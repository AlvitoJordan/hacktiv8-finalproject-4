import React from "react";

const Header = (props) => {
  const { text } = props;
  return <header className="text-red font-bold text-4xl">{text}</header>;
};

export default Header;
