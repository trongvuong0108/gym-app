import axios from "axios";
import { domain } from "../api/api";


export const getGyms = () => {
    axios.get(domain + "home/getGym").then((response) => {
        return response.data;
    });
};