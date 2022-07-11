import { createAction } from "@reduxjs/toolkit";

const setWords = () => {
  return (t: any) => ({ payload: t });
};
export const setWordsReducer = createAction("SET_WORDS_REDUCER", setWords());
