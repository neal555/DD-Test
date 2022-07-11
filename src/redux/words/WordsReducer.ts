import { createReducer } from "@reduxjs/toolkit";
import { setWordsReducer } from "./WordsActions";

export interface Words {
  currentWord: string[];
  fails: any[];
  currentAttempt: string[];
}

const INITIAL_STATE: Words = {
  currentWord: "COMPU".split(""),
  fails: [
    ["C", "U", "M", "P", "U"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  currentAttempt: [],
};
const wordsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setWordsReducer, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export default wordsReducer;
