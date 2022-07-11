import { createReducer } from "@reduxjs/toolkit";
import { setWordsReducer } from "./WordsActions";

export interface Words {
  currentWord: string[];
  fails: any[];
  currentAttempt: number;
  currentIndex: number;
  currentChars: string[];
}

const INITIAL_STATE: Words = {
  currentWord: "COMPU".split(""),
  fails: [],
  currentAttempt: 0,
  currentIndex: 0,
  currentChars: [],
};
const wordsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setWordsReducer, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export default wordsReducer;
