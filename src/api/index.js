import axios from "axios";

const Api = axios.create({
    baseURL: 'https://49.50.163.177:8000',
    timeout: 30000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

export default Api;
