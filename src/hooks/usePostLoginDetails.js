import { useMutation } from "react-query";
import axiosApi from "../apis";

export const usePostValidateLogin = (options) => {
  return useMutation(postValidateLogin(), options);
};

const postValidateLogin = () => {
  return async (data) => {
    const res = await axiosApi.post("/login", data);
    return res.data;
  };
};
