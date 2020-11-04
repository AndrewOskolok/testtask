import { createReducer } from "@reduxjs/toolkit";
import { setToken } from "../actions/tokenAction";

const initialState = null;

export default createReducer(initialState, {
  [setToken]: (_, { payload }) => payload,
});
