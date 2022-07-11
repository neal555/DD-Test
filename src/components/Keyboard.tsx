import React from "react";
import { useAppSelector } from "../redux/hooks";
import { wordsSelector } from "../redux/words/WordsSelector";
import { KeyChar } from "./KeyChar";

export const Keyboard = () => {
  const { fails, currentWord } = useAppSelector(wordsSelector);
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
    <div className="bg-bar-light p-4 rounded ">
      <div className="flex ml-4">
        <KeyChar color={charDict?.Q ?? null}>Q</KeyChar>
        <KeyChar color={charDict?.W ?? null}>W</KeyChar>
        <KeyChar color={charDict?.E ?? null}>E</KeyChar>
        <KeyChar color={charDict?.R ?? null}>R</KeyChar>
        <KeyChar color={charDict?.T ?? null}>T</KeyChar>
        <KeyChar color={charDict?.Y ?? null}>Y</KeyChar>
        <KeyChar color={charDict?.U ?? null}>U</KeyChar>
        <KeyChar color={charDict?.I ?? null}>I</KeyChar>
        <KeyChar color={charDict?.O ?? null}>O</KeyChar>
        <KeyChar color={charDict?.P ?? null}>P</KeyChar>
      </div>
      <div className="flex ml-6">
        <KeyChar color={charDict?.A ?? null}>A</KeyChar>
        <KeyChar color={charDict?.S ?? null}>S</KeyChar>
        <KeyChar color={charDict?.D ?? null}>D</KeyChar>
        <KeyChar color={charDict?.F ?? null}>F</KeyChar>
        <KeyChar color={charDict?.G ?? null}>G</KeyChar>
        <KeyChar color={charDict?.H ?? null}>H</KeyChar>
        <KeyChar color={charDict?.J ?? null}>J</KeyChar>
        <KeyChar color={charDict?.K ?? null}>K</KeyChar>
        <KeyChar color={charDict?.L ?? null}>L</KeyChar>
        <KeyChar color={charDict?.Ñ ?? null}>Ñ</KeyChar>
      </div>
      <div className="flex">
        <KeyChar>ENTER</KeyChar>
        <KeyChar color={charDict?.Z ?? null}>Z</KeyChar>
        <KeyChar color={charDict?.X ?? null}>X</KeyChar>
        <KeyChar color={charDict?.C ?? null}>C</KeyChar>
        <KeyChar color={charDict?.V ?? null}>V</KeyChar>
        <KeyChar color={charDict?.B ?? null}>B</KeyChar>
        <KeyChar color={charDict?.N ?? null}>N</KeyChar>
        <KeyChar color={charDict?.M ?? null}>M</KeyChar>
        <KeyChar color={null}>{"<-"}</KeyChar>
      </div>
    </div>
  );
};
