import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModalsReducer } from "../redux/modals/ModalsActions";
import { modalsSelector } from "../redux/modals/ModalsSellector";
import { Char } from "./Char";
import { Modal } from "./Modal";

export const InfoModal = () => {
  const { showInfoModal } = useAppSelector(modalsSelector);
  const dispatch = useAppDispatch();
  return (
    <Modal visible={showInfoModal}>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5">Cómo jugar</h1>
        <p className="text-xs mb-3">
          Adivina la palabra oculta en cinco intentos. Cada intento debe ser una
          palabra válida de 5 letras. Después de cada intento el color de las
          letras cambia para mostrar qué tan cerca estás de acertar la palabra.
        </p>
        <p className="text-xs text-left font-bold w-full mb-2">Ejemplos</p>
        <div className="flex w-11/12 flex justify-evenly mb-3">
          <Char color="green">{"G"}</Char>
          <Char color="blue">{"A"}</Char>
          <Char color="blue">{"T"}</Char>
          <Char color="blue">{"O"}</Char>
          <Char color="blue">{"S"}</Char>
        </div>
        <p className="text-xs text-left w-full mb-3">
          La letra <strong>G</strong> está en la palabra y en la posición
          correcta.
        </p>
        <div className="flex w-11/12 flex justify-evenly mb-2">
          <Char color="blue">{"V"}</Char>
          <Char color="blue">{"O"}</Char>
          <Char color=" yellow">{"C"}</Char>
          <Char color="blue">{"A"}</Char>
          <Char color="blue">{"L"}</Char>
        </div>
        <p className="text-xs text-left w-full mb-3">
          La letra <strong>C</strong> está en la palabra pero en la posición
          incorrecta.
        </p>
        <div className="flex w-11/12 flex justify-evenly mb-2">
          <Char color="blue">{"C"}</Char>
          <Char color="blue">{"A"}</Char>
          <Char color="blue">{"N"}</Char>
          <Char color="blue">{"T"}</Char>
          <Char color=" gray">{"O"}</Char>
        </div>
        <p className="text-xs text-left w-full mb-4">
          La letra <strong>O</strong> no está en la palabra.
        </p>
        <p className="text-xs text-left w-full mb-3">
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>
        <p className="text-xs text-center w-full mb-3">
          ¡Una palabra nueva cada 5 minutos!
        </p>

        <button
          onClick={() => {
            dispatch(setModalsReducer({ showInfoModal: false }));
            localStorage.setItem("instructions", "readed");
          }}
          className="bg-green rounded px-8 py-1 font-bold text-lg text-white"
        >
          !JUGAR¡
        </button>
      </div>
    </Modal>
  );
};
