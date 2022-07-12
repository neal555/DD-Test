import React from "react";

const Background = (props: any) => {
  return (
    <div className="bg-gray-extra-light dark:bg-blue transition-all min-h-screen text-black dark:text-white">
      {props.children}
    </div>
  );
};

export default Background;
