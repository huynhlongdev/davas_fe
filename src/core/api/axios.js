import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error(err);
    return Promise.reject(err);
  },
);

export default axiosClient;
