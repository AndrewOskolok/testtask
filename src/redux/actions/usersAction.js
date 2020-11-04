import { createAction } from "@reduxjs/toolkit";
import { SET_USERS, UPDATE_USERS } from "../constants/constants";

export const setUsers = createAction(SET_USERS);
export const updateUsers = createAction(UPDATE_USERS);
