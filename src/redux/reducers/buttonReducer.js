import { createReducer } from "@reduxjs/toolkit";
import { setButton } from "../actions/buttonAction";

const initialState = true;

export default createReducer(initialState, {
  [setButton]: (_, { payload }) => payload,
});
