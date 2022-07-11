import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModalsReducer } from "../redux/modals/ModalsActions";
import { modalsSelector } from "../redux/modals/ModalsSellector";
import { Modal } from "./Modal";

export const LogsModal = () => {
  const { showLogsModal } = useAppSelector(modalsSelector);
  const dispatch = useAppDispatch();
  return (
    <Modal visible={showLogsModal}>
      <div>
        <h1 className="text-center mt-2 text-2xl">Estadísticas</h1>
      </div>
      <div className="flex justify-evenly text-center">
        <div className="mt-2">
          <h3 className="mt-2 text-2xl">1</h3>
          <p className="text-sm">Jugadas</p>
        </div>
        <div className="mt-2">
          <h3 className="mt-2 text-2xl">4</h3>
          <p className="text-sm">Victorias</p>
        </div>
      </div>
      <div className="text-center">
        <p className="mt-2">SIGUIENTE PALABRA</p>
        <button
          className="bg-green rounded px-8 py-1 font-bold text-lg text-white mt-2"
          onClick={() => {
            dispatch(setModalsReducer({ showLogsModal: false }));
          }}
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
};
