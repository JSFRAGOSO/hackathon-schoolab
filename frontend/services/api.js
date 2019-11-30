import axios from "axios";

const api = axios.create({
  baseURL: "https://radiant-inlet-95357.herokuapp.com/"
});

export default api;
