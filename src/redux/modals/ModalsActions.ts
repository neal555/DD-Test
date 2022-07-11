import { createAction } from "@reduxjs/toolkit";

const setModals = () => {
  return (t: any) => ({ payload: t });
};
export const setModalsReducer = createAction("SET_MODALS_REDUCER", setModals());
