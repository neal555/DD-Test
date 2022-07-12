import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { wordsSelector } from "../redux/words/WordsSelector";
import { KeyChar } from "./KeyChar";

export const Keyboard = () => {
  const { fails, currentWord } = useAppSelector(wordsSelector);
  useEffect(() => {
    console.log(currentWord);
  }, [currentWord]);
  const charDict: any = {};
  fails.forEach((word) => {
    word.forEach((char: string, index: number) => {
      let bgChart: string | null = "";
      const indexChart = currentWord.indexOf(char);
      if (indexChart !== -1 && indexChart === index) {
        bgChart = "green";
      } else if (indexChart === -1) {
        bgChart = " gray";
      } else {
        bgChart = null;
      }
      charDict[char] = bgChart;
    });
  });
  return (
    <div className="bg-bar dark:bg-bar-light p-2 sm:p-4 rounded ">
      <div className="flex ml-2 sm:ml-4">
        <KeyChar color={charDict?.Q ?? " empty-key"}>Q</KeyChar>
        <KeyChar color={charDict?.W ?? " empty-key"}>W</KeyChar>
        <KeyChar color={charDict?.E ?? " empty-key"}>E</KeyChar>
        <KeyChar color={charDict?.R ?? " empty-key"}>R</KeyChar>
        <KeyChar color={charDict?.T ?? " empty-key"}>T</KeyChar>
        <KeyChar color={charDict?.Y ?? " empty-key"}>Y</KeyChar>
        <KeyChar color={charDict?.U ?? " empty-key"}>U</KeyChar>
        <KeyChar color={charDict?.I ?? " empty-key"}>I</KeyChar>
        <KeyChar color={charDict?.O ?? " empty-key"}>O</KeyChar>
        <KeyChar color={charDict?.P ?? " empty-key"}>P</KeyChar>
      </div>
      <div className="flex ml-4 sm:ml-6 ">
        <KeyChar color={charDict?.A ?? " empty-key"}>A</KeyChar>
        <KeyChar color={charDict?.S ?? " empty-key"}>S</KeyChar>
        <KeyChar color={charDict?.D ?? " empty-key"}>D</KeyChar>
        <KeyChar color={charDict?.F ?? " empty-key"}>F</KeyChar>
        <KeyChar color={charDict?.G ?? " empty-key"}>G</KeyChar>
        <KeyChar color={charDict?.H ?? " empty-key"}>H</KeyChar>
        <KeyChar color={charDict?.J ?? " empty-key"}>J</KeyChar>
        <KeyChar color={charDict?.K ?? " empty-key"}>K</KeyChar>
        <KeyChar color={charDict?.L ?? " empty-key"}>L</KeyChar>
        <KeyChar color={charDict?.Ñ ?? " empty-key"}>Ñ</KeyChar>
      </div>
      <div className="flex">
        <KeyChar color={" empty-key"}>ENTER</KeyChar>
        <KeyChar color={charDict?.Z ?? " empty-key"}>Z</KeyChar>
        <KeyChar color={charDict?.X ?? " empty-key"}>X</KeyChar>
        <KeyChar color={charDict?.C ?? " empty-key"}>C</KeyChar>
        <KeyChar color={charDict?.V ?? " empty-key"}>V</KeyChar>
        <KeyChar color={charDict?.B ?? " empty-key"}>B</KeyChar>
        <KeyChar color={charDict?.N ?? " empty-key"}>N</KeyChar>
        <KeyChar color={charDict?.M ?? " empty-key"}>M</KeyChar>
        <KeyChar color={" empty-key"}>{"<-"}</KeyChar>
      </div>
    </div>
  );
};
