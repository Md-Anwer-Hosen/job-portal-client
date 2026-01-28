import React from "react";
import useAxiosSecure from "../hooks/UseAxiosSecure";

const useApplicationsApi = () => {
  const axiosSecure = useAxiosSecure();

  const myApplicationsPromise = async (email) => {
    const res = await axiosSecure.get(`/applications?email=${email}`);

    return res.data;
  };

  return myApplicationsPromise;
};

export default useApplicationsApi;
