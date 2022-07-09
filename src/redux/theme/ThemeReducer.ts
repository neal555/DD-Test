import { createReducer } from "@reduxjs/toolkit";
import { handleTheme } from "./ThemeActions";

export interface Theme {
  isDarkMode: boolean;
}

const changeClass = (isDark: boolean) => {
  const root = window.document.documentElement;
  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(!isDark ? "light" : "dark");
};
const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("is-dark-mode");
    if (storedPrefs !== null && storedPrefs !== undefined) {
      const isDarkMode: boolean = JSON.parse(storedPrefs);
      changeClass(isDarkMode);
      return JSON.parse(storedPrefs);
    }
  }

  return false;
};
const INITIAL_STATE: Theme = {
  isDarkMode: getInitialTheme(),
};
const themeReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(handleTheme, (state, action) => {
    changeClass(action.payload.isDarkMode);
    localStorage.setItem(
      "is-dark-mode",
      JSON.stringify(action.payload.isDarkMode)
    );
    return { ...state, isDarkMode: action.payload.isDarkMode };
  });
});

export default themeReducer;
