import axios, { AxiosResponse } from 'axios';

const baseURL = process.env.BASE_URL as string;
export const request = (data: { requestType: string; route: string; body: string }): Promise<AxiosResponse> => {
    if (data.requestType === 'POST') {
        return axios.post(`${baseURL}/${data.route}`, data.body);
    } else if (data.requestType === 'GET') {
        return axios.get(`${baseURL}/${data.route}`);
    }
    return axios.get(`${baseURL}/${data.route}`);
};

export {};
