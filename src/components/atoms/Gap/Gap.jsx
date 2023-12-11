import React from "react";

const Gap = (props) => {
  const { size } = props;
  return <div className={`h-${size}`} />;
};

export default Gap;
