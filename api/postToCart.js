import { sendRequest } from './index';
const BASE_URL = 'http://localhost:3000';

export const addToCart = (item) => {
    return sendRequest({
        pathName: 'cart',
        baseUrl: BASE_URL,
        method: 'POST',
        body: item
    });
};