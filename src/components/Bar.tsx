import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import Toggle from "../theme/Toggle";
import QuestionDark from "../assets/QuestionDark.svg";
import QuestionLight from "../assets/QuestionLight.svg";
export const Bar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="bg-bar dark:bg-bar-light px-5 py-2 w-4/6 flex flex-row items-center justify-between rounded-md my-8">
      <img
        className="block"
        src={theme === "dark" ? QuestionLight : QuestionDark}
        alt="helpIcon"
      />
      <div>WORDLE</div>
      <div>
        <Toggle />
      </div>
    </div>
  );
};
