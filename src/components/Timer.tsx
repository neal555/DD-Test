import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModalsReducer } from "../redux/modals/ModalsActions";
import { modalsSelector } from "../redux/modals/ModalsSellector";
import { changeWord } from "../redux/words/WordsActions";

export const Timer = () => {
  const { timeLeft, runingTimeout } = useAppSelector(modalsSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      if (runingTimeout) {
        if (timeLeft === 0) {
          dispatch(changeWord());
          dispatch(setModalsReducer({ timeLeft: 300 }));
        } else {
          dispatch(setModalsReducer({ timeLeft: timeLeft - 1 }));
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, runingTimeout]);
  const mins = Math.floor(timeLeft / 60);
  return (
    <div>
      <h3>{`0${mins} : ${
        timeLeft % 60 > 9 ? timeLeft % 60 : "0" + (timeLeft % 60)
      }`}</h3>
    </div>
  );
};
