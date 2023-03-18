import axios from "axios";

axios.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8000/';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    config.headers['Access-Control-Allow-Credentials'] = true;
    return config;
});

export const api = axios.create({
    baseURL: "https://system41-production.up.railway.app/"
    // baseURL: "http://127.0.0.1:8000/"
})