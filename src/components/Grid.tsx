import React from "react";
import { useAppSelector } from "../redux/hooks";
import { wordsSelector } from "../redux/words/WordsSelector";
import { Char } from "./Char";

export const Grid = () => {
  const { fails, currentWord, currentChars } = useAppSelector(wordsSelector);

  return (
    <div className="min-w-full">
      <div className=" p-3 min-w-full">
        {fails.map((word, i) => {
          return (
            <div className=" flex flex-row" key={i.toString()}>
              {word.map((char: string, index: number) => {
                let bgChart = "";
                const indexChart = currentWord.indexOf(char);

                if (indexChart !== -1 && indexChart === index) {
                  bgChart = "green";
                } else if (indexChart !== -1) {
                  bgChart = " yellow";
                } else {
                  bgChart = " gray";
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
        <div className=" flex flex-row">
          {currentChars.map((char: string, index: number) => {
            return (
              <Char key={index.toString()} whithMargin>
                {char}
              </Char>
            );
          })}
          {currentChars.length <= 0 && <Char whithMargin>{""}</Char>}
          {currentChars.length <= 1 && <Char whithMargin>{""}</Char>}
          {currentChars.length <= 2 && <Char whithMargin>{""}</Char>}
          {currentChars.length <= 3 && <Char whithMargin>{""}</Char>}
          {currentChars.length <= 4 && <Char whithMargin>{""}</Char>}
        </div>
        {fails.length <= 0 && (
          <div className=" flex flex-row">
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
          </div>
        )}
        {fails.length <= 1 && (
          <div className=" flex flex-row">
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
          </div>
        )}
        {fails.length <= 2 && (
          <div className=" flex flex-row">
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
          </div>
        )}
        {fails.length <= 3 && (
          <div className=" flex flex-row">
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
            <Char whithMargin>{""}</Char>
          </div>
        )}
      </div>
    </div>
  );
};
