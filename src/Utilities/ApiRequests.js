import axios from "axios";

const Server_URL = "https://0f97w.sse.codesandbox.io";
const AuthenticateUser = (credentials) => {
  return axios.get(
    Server_URL +
      "/auth?email=" +
      credentials.email +
      "&password=" +
      credentials.password
  );
};
const getAllUserInfo = () => {
  console.log("Sending request");
  return axios.get(
    "http://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
  );
};
export { AuthenticateUser, getAllUserInfo };
