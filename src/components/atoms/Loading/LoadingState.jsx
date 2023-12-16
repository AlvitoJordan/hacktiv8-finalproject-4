import React from "react";

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center h-[550px]">
      <div className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-red border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
};

export default LoadingState;
