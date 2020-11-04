import { createReducer } from "@reduxjs/toolkit";
import { setUsers, updateUsers } from "../actions/usersAction";

const initialState = [];

export default createReducer(initialState, {
  [setUsers]: (_, { payload }) => payload,
  [updateUsers]: (state, { payload }) => [...state, ...payload],
});
