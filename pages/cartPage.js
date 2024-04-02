import styles from './allProductsPage.module.css'
import {productCard} from "../components/productCard";
import {GET} from "../api/GET";



const cartIDs = []



export const getCartPage = () => {
    const div = document.createElement('div');
    div.classList.add(styles.container)
    GET('cart')
        .then(
            data =>data.data.map(product => div.append(productCard(product)))
        )

    return div
}