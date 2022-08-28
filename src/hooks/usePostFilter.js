import { useMutation } from "react-query";
import axiosApi from "../apis";

export const usePostFilter = (options) => {
  return useMutation(postFilter(), options);
};

const postFilter = () => {
  return async (data) => {
    const res = await axiosApi.post("/clickHouse/data", data);
    return res.data;
  };
};
