import axios from "axios";
import { updatePage } from "../actions/pageAction";
import { updateUsers } from "../actions/usersAction";
import { setButton } from "../actions/buttonAction";
import { setModal } from "../actions/modalAction";

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

export const postUserOperation = (data, token) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("position_id", data.position);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", data.image);

    const result = await axios({
      method: "post",
      data: formData,
      url: "/users",
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    });

    result.status && dispatch(setModal("modal"));
  } catch (error) {
    console.log(error);
  }
};
