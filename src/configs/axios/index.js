import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_EVENT}/api/v1`,
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default instance;
