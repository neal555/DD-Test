import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./modals/ModalsReducer";
import themeReducer from "./theme/ThemeReducer";
import wordsReducer from "./words/WordsReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    words: wordsReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
