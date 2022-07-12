import { createReducer } from "@reduxjs/toolkit";
import { setModalsReducer } from "./ModalsActions";

export interface Modals {
  showInfoModal: boolean;
  showLogsModal: boolean;
  timeLeft: number;
  runingTimeout: boolean;
}

const getInitialInstruction = (): boolean => {
  const isReaded = localStorage.getItem("instructions") === "readed";
  return !isReaded;
};

const INITIAL_STATE: Modals = {
  showInfoModal: getInitialInstruction(),
  showLogsModal: false,
  timeLeft: 300,
  runingTimeout: getInitialInstruction(),
};
const modalsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setModalsReducer, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export default modalsReducer;
