const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeOut: 1000
});

export default instance