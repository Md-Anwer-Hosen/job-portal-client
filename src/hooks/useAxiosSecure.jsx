import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-bau7.onrender.com",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();

  useEffect(() => {
    const reqInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
    );

    const resInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.status === 401 || error.status === 401) {
          signOutUser()
            // .then(() => console.log("signOutUser"))
            // .catch((err) => console.log(err));
        }
      },
    );

    // cleanup (very important)
    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [user?.accessToken]);

  return axiosInstance;
};

export default useAxiosSecure;
