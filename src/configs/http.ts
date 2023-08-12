import axios from "axios";
import ENV from "constants/env";

const http = axios.create({
  baseURL: ENV.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
