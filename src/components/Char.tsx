import React from "react";
type ChartType = {
  children: string;
  color?: string;
  whithMargin?: boolean;
};
export const Char = (props: ChartType) => {
  return (
    <div
      className={`bg-${props.children === "" ? "empty-key" : props.color} ${
        props.whithMargin
          ? ""
          : "border-2 border-solid border-black dark:border-gray "
      }p-1 w-14 h-14 flex items-center justify-center rounded font-bold text-lg ${
        props.whithMargin ? "m-1 " : ""
      }
      `}
    >
      {props.children}
    </div>
  );
};
