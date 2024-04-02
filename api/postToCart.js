import { sendRequest } from './index';
const BASE_URL = 'http://localhost:3000';

export const addToCart = (pathName, item) => {
    return sendRequest({
        pathName,
        baseUrl: BASE_URL,
        method: 'POST',
        body: item
    });
};