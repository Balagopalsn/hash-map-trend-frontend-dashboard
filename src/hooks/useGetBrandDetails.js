import { useQuery } from "react-query";
import axiosApi from "../apis";

export const useGetBrandDetails = () =>{
    return useQuery(['Brand'], getBrand());
}

const getBrand = () => {
    return async () => {
        const res = await axiosApi.get('/profile');
        return res.data;
    }
} 