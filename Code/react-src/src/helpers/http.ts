import axios from "axios";
import MainStore from "../stores/index.store";

//TODO: replace with environment variable
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

export function authHeader() {
  const token = MainStore.getState().accounts.authToken;
  if (token) {
    return { headers: { Authorization: "Bearer " + token } };
  } else {
    return {};
  }
}
