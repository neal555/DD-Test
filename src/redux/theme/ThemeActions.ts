import { createAction } from "@reduxjs/toolkit";
import { Theme } from "./ThemeReducer";

const toggleTheme = () => {
  return (t: Theme) => ({ payload: t });
};
export const handleTheme = createAction("HANDLE_THEME", toggleTheme());
