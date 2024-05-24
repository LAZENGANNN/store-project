import {sendRequest} from "./index";

const BASE_URL = 'http://localhost:3000';

export const getCategories = pathName => {
    return sendRequest({ pathName, baseUrl: BASE_URL });
};
