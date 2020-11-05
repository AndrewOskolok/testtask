import axios from "axios";
import { updatePage } from "../actions/pageAction";
import { updateUsers } from "../actions/usersAction";
import { setButton } from "../actions/buttonAction";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getUserOperation = (page) => async (dispatch) => {
  try {
    const request = await axios.get(`/users?page=${page}&count=6`);

    dispatch(updatePage());
    dispatch(updateUsers(request.data.users));

    request.data.page < request.data.total_pages && dispatch(setButton(true));
  } catch (error) {
    console.log(error);
  }
};
