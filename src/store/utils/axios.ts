import axios from "axios";

export const axiosNoAuth = () => axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_BASEURL}`
})
