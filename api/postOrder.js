import { sendRequest } from './index';
const BASE_URL = 'http://localhost:3000';

export const sendOrder = (item) => {
    return sendRequest({
        pathName: 'orders',
        baseUrl: BASE_URL,
        method: 'POST',
        body: item
    });
};