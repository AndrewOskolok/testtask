import { createReducer } from "@reduxjs/toolkit";
import { setModal } from "../actions/modalAction";

const initialState = { status: false, errMess: "" };

export default createReducer(initialState, {
  [setModal]: (state, { payload }) => ({ ...state, ...payload }),
});
