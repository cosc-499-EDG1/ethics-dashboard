import axios from 'axios';

//TODO: replace with environment variable
export default axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-type': 'application/json'
    }
});
