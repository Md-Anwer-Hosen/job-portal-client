import React from "react";
import useAxiosSecure from "../hooks/UseAxiosSecure";

const useJobApi = () => {
  const axiosSecure = useAxiosSecure();
  const myJobs = async (email) => {
    const res = await axiosSecure.get(`/jobs?email=${email}`);

    return res.data;
  };

  return { myJobs };
};

export default useJobApi;
