import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true,
});

const createError = (
  httpStatusCode,
  statusCode,
  errorMessage,
  problems,
  errorCode = ""
) => {
  const error = new Error();
  error.httpStatusCode = httpStatusCode;
  error.statusCode = statusCode;
  error.errorMessage = errorMessage;
  error.problems = problems;
  error.errorCode = errorCode + "";
  return error;
};

export const isSuccessStatusCode = (s) => {
  const statusType = typeof s;
  return (
    (statusType === "number" && s === 0) ||
    (statusType === "string" && s.toUpperCase())
  );
};
