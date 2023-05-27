import axios from "../api/axios";
export const handleLogin = (username, password) => {
  return axios.post("/auth/login");
};
