import { createReducer } from "@reduxjs/toolkit";
import { setPage, updatePage } from "../actions/pageAction";

const initialState = 1;

export default createReducer(initialState, {
  [setPage]: (_, { payload }) => payload,
  [updatePage]: (state) => state + 1,
});
