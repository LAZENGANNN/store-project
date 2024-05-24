import { sendRequest } from './index';
const BASE_URL = 'http://localhost:3000';
import {GET} from "./GET.js";
import {checkCart1} from "../features/checkCart.js";


export const addToCart = (item) => {

    const arr = []
    let isInArr = false
    GET('cart')
        .then(data => data.data.map(product => arr.push(product.id)) )
        .then( ()=>{
            if(arr.includes(item.id)){
                isInArr = true
            }
            else {
                isInArr = false
            }
            console.log(isInArr, arr)

        })
        .then(()=>
        {if(isInArr===false){
            console.log(isInArr)
            return sendRequest({
                pathName: 'cart',
                baseUrl: BASE_URL,
                method: 'POST',
                body: item
            });
        }})
};