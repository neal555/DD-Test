import { createAction } from "@reduxjs/toolkit";

const setWords = () => {
  return (t: any) => ({ payload: t });
};

export const setWordsReducer = createAction("SET_WORDS_REDUCER", setWords());
export const changeWord = createAction("SET_NEW_WORD");
