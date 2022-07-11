import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setWordsReducer } from "../redux/words/WordsActions";
import { wordsSelector } from "../redux/words/WordsSelector";
type ChartType = {
  children: string;
  color?: string | null;
};
export const KeyChar = (props: ChartType) => {
  const { fails, currentIndex, currentChars, currentAttempt } =
    useAppSelector(wordsSelector);
  const dispatch = useAppDispatch();

  const handleKey = (key: string) => {
    if (key === "ENTER") {
      if (currentChars.length === 5) {
        dispatch(
          setWordsReducer({
            currentIndex: 0,
            currentAttempt: currentAttempt + 1,
            fails: [...fails, currentChars],
            currentChars: [],
          })
        );
      }
      return;
    }
    if (key === "<-".toString()) {
      dispatch(
        setWordsReducer({
          currentIndex: currentIndex <= 0 ? 0 : currentIndex - 1,
          currentChars: currentChars.slice(0, currentIndex - 1),
        })
      );
      return;
    }
    if (fails.length === 5) {
      return;
    }
    if (currentChars.length < 5) {
      dispatch(
        setWordsReducer({
          currentIndex: currentIndex + 1,
          currentChars: [...currentChars, key],
        })
      );
    }
  };

  return (
    <div
      className={` bg-${props.color ?? "key-light"} dark:bg-${
        props.color ?? "key-dark"
      }  p-1 w-aouto m-1 px-3 h-8 flex items-center justify-center rounded font-bold text-sm cursor-pointer
      `}
      onClick={() => handleKey(props.children)}
    >
      {props.children}
    </div>
  );
};
