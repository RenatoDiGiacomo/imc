import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001',
})

export const getIMCData = async () => {
    const response = await api.get('/data');
    return response.data;
}

export const postIMCData = async (data) => {
    const response = await api.post('/data', data);
    return response.data;
}