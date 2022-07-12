import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModalsReducer } from "../redux/modals/ModalsActions";
import { setWordsReducer } from "../redux/words/WordsActions";
import { wordsSelector } from "../redux/words/WordsSelector";
type ChartType = {
  children: string;
  color?: string | null;
};
export const KeyChar = (props: ChartType) => {
  const { fails, currentIndex, currentChars, currentAttempt, currentWord } =
    useAppSelector(wordsSelector);
  const dispatch = useAppDispatch();

  const handleKey = (key: string) => {
    if (key === "ENTER") {
      if (
        fails.length === 4 &&
        JSON.stringify(currentWord) !== JSON.stringify(fails[4])
      ) {
        const localGames = localStorage.getItem("games");
        if (typeof localGames === "string") {
          localStorage.setItem(
            "games",
            (parseInt(localGames, 10) + 1).toString()
          );
        } else {
          localStorage.setItem("games", "1");
        }
        dispatch(setModalsReducer({ showLogsModal: true }));
        return;
      }
      if (currentChars.length === 5) {
        if (JSON.stringify(currentChars) === JSON.stringify(currentWord)) {
          const localGames = localStorage.getItem("games");
          const localVictories = localStorage.getItem("victories");
          if (typeof localVictories === "string") {
            localStorage.setItem(
              "victories",
              (parseInt(localVictories, 10) + 1).toString()
            );
          } else {
            localStorage.setItem("victories", "1");
          }
          if (typeof localGames === "string") {
            localStorage.setItem(
              "games",
              (parseInt(localGames, 10) + 1).toString()
            );
          } else {
            localStorage.setItem("games", "1");
          }
          dispatch(
            setModalsReducer({
              showLogsModal: true,
              timeLeft: 300,
              runingTimeout: false,
            })
          );
          return;
        }

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
      className={` bg-${props.color} dark:bg-${props.color}  m-1 px-2 py-1 sm:px-3 sm:py-4 sm:text-sm h-8 text-xs flex items-center justify-center rounded font-bold cursor-pointer
      `}
      onClick={() => handleKey(props.children)}
    >
      {props.children}
    </div>
  );
};
