import React from "react";

const Shimmer3 = () => {
  return (
    <div className="flex flex-col lg:px-16 md:px-16 w-full pt-3">
      <div className="w-full lg:pb-2 md:pb-2 pb-2 pt-2">
        <div className="w-1/2 h-8 bg-gray-300 rounded-md animate-pulse mb-4"></div>
      </div>
      <div className="flex flex-wrap space-x-4 overflow-hidden">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-64 h-40 bg-gray-300 rounded-lg animate-pulse mb-4"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer3;
