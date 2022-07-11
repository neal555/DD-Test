import { createReducer } from "@reduxjs/toolkit";
import { setModalsReducer } from "./ModalsActions";

export interface Modals {
  showInfoModal: boolean;
  showLogsModal: boolean;
}

const INITIAL_STATE: Modals = {
  showInfoModal: true,
  showLogsModal: false,
};
const modalsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setModalsReducer, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export default modalsReducer;
