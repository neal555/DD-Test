import React from "react";
import Toggle from "./Toggle";
import QuestionDark from "../assets/QuestionDark.svg";
import QuestionLight from "../assets/QuestionLight.svg";
import OptionLight from "../assets/OptionsLight.svg";
import OptionsDark from "../assets/OptionsDark.svg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { themeSelector } from "../redux/theme/ThemeSelector";
import { setModalsReducer } from "../redux/modals/ModalsActions";
export const Bar = () => {
  const { isDarkMode } = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-bar dark:bg-bar-light px-5 py-2 w-4/6 flex flex-row items-center justify-between rounded-md my-8">
      <img
        onClick={() => dispatch(setModalsReducer({ showInfoModal: true }))}
        className="block"
        src={isDarkMode ? QuestionLight : QuestionDark}
        alt="helpIcon"
      />
      <div>WORDLE</div>
      <div className="flex">
        <img
          onClick={() => dispatch(setModalsReducer({ showLogsModal: true }))}
          className="block"
          src={isDarkMode ? OptionLight : OptionsDark}
          alt="optionsIcon"
        />
        <Toggle />
      </div>
    </div>
  );
};
