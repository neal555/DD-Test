import { createReducer } from "@reduxjs/toolkit";
import { getRandomInt } from "../../utils/math";
import { data } from "../../words";
import { changeWord, setWordsReducer } from "./WordsActions";

export interface Words {
  currentWord: string[];
  fails: any[];
  currentAttempt: number;
  currentIndex: number;
  currentChars: string[];
}
const getRandomWord = (): string[] => {
  const randomWord = data[getRandomInt(data.length - 1)];
  return randomWord.toUpperCase().split("");
};
const INITIAL_STATE: Words = {
  currentWord: getRandomWord(),
  fails: [],
  currentAttempt: 0,
  currentIndex: 0,
  currentChars: [],
};
const wordsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setWordsReducer, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(changeWord, (state) => {
      return {
        ...state,
        currentAttempt: 0,
        currentWord: getRandomWord(),
        fails: [],
        currentChars: [],
        currentIndex: 0,
      };
    });
});

export default wordsReducer;
