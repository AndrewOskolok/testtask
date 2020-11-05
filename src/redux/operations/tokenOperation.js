import axios from "axios";
import { setToken } from "../actions/tokenAction";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getTokenOperation = () => async (dispatch) => {
  try {
    const request = await axios.get(`/token`);
    console.log(request);
    dispatch(setToken(request.data.token));
  } catch (error) {
    console.log(error);
  }
};
