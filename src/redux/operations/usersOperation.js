import axios from "axios";
import { setButton } from "../actions/buttonAction";
import { updatePage } from "../actions/pageAction";
import { updateUsers } from "../actions/usersAction";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getUserOperation = (page) => async (dispatch) => {
  try {
    const request = await axios.get(`/users?page=${page}&count=6`);
    dispatch(updateUsers(request.data.users));

    dispatch(updatePage());
    request.data.links.next_url !== null && dispatch(setButton(true));
  } catch (error) {
    console.log(error);
  }
};
