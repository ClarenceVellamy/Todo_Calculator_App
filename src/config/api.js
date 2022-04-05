import axios from "axios";

export const API = axios.create({
    baseURL: "http://192.168.100.91:5000/api/v1/",
});