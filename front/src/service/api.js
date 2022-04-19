import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:4000/api/v1',
});

const API = {
    getEvents: () => api
        .get('events')
        .then(response => response.data),
};

export default API;
