import React from "react";
import SwitchLight from "../assets/SwitchLight.svg";
import SwitchDark from "../assets/SwitchDark.svg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { themeSelector } from "../redux/theme/ThemeSelector";
import { handleTheme } from "../redux/theme/ThemeActions";
const Toggle = () => {
  const { isDarkMode } = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  return (
    <div className=" w-1/2transition duration-500 ease-in-out rounded-full">
      {isDarkMode ? (
        <img
          className="h-8 w-16 block"
          onClick={() => dispatch(handleTheme({ isDarkMode: false }))}
          src={SwitchDark}
          alt="toggleIcon"
        />
      ) : (
        <img
          className="h-8 w-16 block"
          onClick={() => dispatch(handleTheme({ isDarkMode: true }))}
          src={SwitchLight}
          alt="toggleIcon"
        />
      )}
    </div>
  );
};

export default Toggle;
