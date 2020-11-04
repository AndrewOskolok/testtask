import { combineReducers } from "redux";
import modal from "./modalReducer";
import token from "./tokenReducer";
import users from "./usersReducer";
import button from "./buttonReducer";
import page from "./pageReducer";

const rootReducer = combineReducers({
  modal,
  token,
  users,
  button,
  page,
});

export default rootReducer;
