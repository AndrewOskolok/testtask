import { createReducer } from "@reduxjs/toolkit";
import { setModal } from "../actions/modalAction";

const initialState = false;

export default createReducer(initialState, {
  [setModal]: (_, { payload }) => payload,
});
