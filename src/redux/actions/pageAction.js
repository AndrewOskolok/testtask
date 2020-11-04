import { createAction } from "@reduxjs/toolkit";
import { SET_PAGE, UPDATE_PAGE } from "../constants/constants";

export const setPage = createAction(SET_PAGE);
export const updatePage = createAction(UPDATE_PAGE);
