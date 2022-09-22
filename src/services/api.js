import axios from "axios";
import {appConfig} from "./config";


const createAxios = () => {
    const params = {
        baseURL: appConfig.apiURL,
    };
    return axios.create(params);
};

export const fetchProducts = async (query = '') => {
    const { data } = await createAxios().get(`/products?${query}`);
    return data;
};
