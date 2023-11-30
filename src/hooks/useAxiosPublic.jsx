import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tech-product-discovery-platform-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
