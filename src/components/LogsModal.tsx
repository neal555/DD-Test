import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModalsReducer } from "../redux/modals/ModalsActions";
import { modalsSelector } from "../redux/modals/ModalsSellector";
import { changeWord } from "../redux/words/WordsActions";
import { wordsSelector } from "../redux/words/WordsSelector";
import { Modal } from "./Modal";
import { Timer } from "./Timer";

export const LogsModal = () => {
  const { showLogsModal } = useAppSelector(modalsSelector);
  const { currentWord, fails } = useAppSelector(wordsSelector);
  const dispatch = useAppDispatch();
  const localGames = localStorage.getItem("games");
  const localVictories = localStorage.getItem("victories");
  return (
    <Modal visible={showLogsModal}>
      <div>
        <h1 className="text-center mt-2 text-2xl font-bold">Estadísticas</h1>
      </div>
      <div className="flex justify-evenly text-center">
        <div className="mt-2">
          <h3 className="mt-2 text-2xl font-bold">{localGames ?? "0"}</h3>
          <p className="text-sm">Jugadas</p>
        </div>
        <div className="mt-2">
          <h3 className="mt-2 text-2xl font-bold">{localVictories ?? "0"}</h3>
          <p className="text-sm">Victorias</p>
        </div>
      </div>
      <div className="text-center">
        {fails.length === 4 &&
          JSON.stringify(currentWord) !==
            JSON.stringify(fails[fails.length - 1]) && (
            <p className="mt-2">
              La palabra era: <strong>{currentWord}</strong>
            </p>
          )}
        {JSON.stringify(currentWord) !==
          JSON.stringify(fails[fails.length - 1]) && (
          <p className="mt-2">¡Correcto!</p>
        )}
        <p className="mt-2">SIGUIENTE PALABRA</p>

        <Timer />
        <button
          className="bg-green rounded px-8 py-1 font-bold text-lg text-white mt-2"
          onClick={() => {
            if (
              fails.length === 4 &&
              JSON.stringify(currentWord) !== JSON.stringify(fails[3])
            ) {
              dispatch(setModalsReducer({ timeLeft: 300 }));
            }
            if (
              JSON.stringify(fails[fails.length - 1]) !==
              JSON.stringify(currentWord)
            ) {
              dispatch(changeWord());
            }
            dispatch(
              setModalsReducer({ showLogsModal: false, runingTimeout: true })
            );
          }}
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
};
