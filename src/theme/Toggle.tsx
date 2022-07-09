import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchLight from "../assets/SwitchLight.svg";
import SwitchDark from "../assets/SwitchDark.svg";
const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className=" w-1/2transition duration-500 ease-in-out rounded-full">
      {theme === "dark" ? (
        <img
          className="h-8 block"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          src={SwitchLight}
          alt="toggleIcon"
        />
      ) : (
        <img
          className="h-8 block"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          src={SwitchDark}
          alt="toggleIcon"
        />
      )}
    </div>
  );
};

export default Toggle;
