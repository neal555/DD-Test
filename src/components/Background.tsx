import React from "react";

const Background = (props: any) => {
  return (
    <body className="bg-gray-extra-light dark:bg-blue transition-all h-screen text-black dark:text-white">
      {props.children}
    </body>
  );
};

export default Background;
