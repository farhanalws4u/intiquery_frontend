import axios from "axios";

// const url = "https://secure-springs-23449.herokuapp.com";

const url = "http://localhost:5000";

export const submitQuestion = async (questionData) =>
  await axios.post(`${url}/question/submitQuestion`, questionData);

export const getQuestions = async () =>
  await axios.get(`${url}/question/getQuestions`);

export const submitAnswer = async (data) =>
  await axios.post(`${url}/question/submitAnswer`, data);
