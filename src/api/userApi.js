import axios from "axios";

const url = "https://secure-springs-23449.herokuapp.com";
// const url = "http://localhost:5000";

export const addUserData = async (data) => {
  return await axios.post(`${url}/user/addUserData`, data);
};
