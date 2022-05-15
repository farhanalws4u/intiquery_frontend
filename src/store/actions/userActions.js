import * as api from "../../api/userApi";
import { ADD_USER_DATA } from "../../constants/actionTypes";
import { setUserLoading } from "./authActions";

export const addUserData = (newData) => async (dispatch) => {
  dispatch(setUserLoading(true));
  try {
    const { data } = await api.addUserData(newData);

    console.log(data);

    dispatch({ type: ADD_USER_DATA, payload: data });

    dispatch(setUserLoading(false));
  } catch (error) {
    console.log(error);

    dispatch(setUserLoading(false));
  }
};