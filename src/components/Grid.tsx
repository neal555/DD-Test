import React from "react";
import { useAppSelector } from "../redux/hooks";
import { wordsSelector } from "../redux/words/WordsSelector";
import { Char } from "./Char";

export const Grid = () => {
  const { fails, currentWord } = useAppSelector(wordsSelector);

  return (
    <div className=" p-3">
      {fails.map((word, i) => {
        return (
          <div className=" flex flex-row" key={i.toString()}>
            {word.map((char: string, index: number) => {
              let bgChart = "";
              const indexChart = currentWord.indexOf(char);

              if (indexChart !== -1 && indexChart === index) {
                bgChart = "green";
              } else if (indexChart !== -1) {
                bgChart = "yellow";
              } else {
                bgChart = "gray";
              }

              return (
                <Char key={index.toString()} color={bgChart} whithMargin>
                  {char}
                </Char>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
