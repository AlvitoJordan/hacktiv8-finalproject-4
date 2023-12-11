import React from "react";

const SpanText = (props) => {
  const { year, runtime, rated } = props;
  return (
    <span className="text-gray-500 dark:text-gray-200 text-base font-thin">
      {year}&ensp;|&ensp;{runtime}
      &ensp;|&ensp;
      {rated}
    </span>
  );
};

export default SpanText;
