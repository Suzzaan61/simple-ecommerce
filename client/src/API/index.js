import axios from "axios";

const BaseURL = "http://localhost:8180/api";

const API = axios.create({
    baseURL : BaseURL,
});

export default API;