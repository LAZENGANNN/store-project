import {GET} from "../api/GET";
import {productCard} from "../components/productCard";
import styles from './allProductsPage.module.css'



export const allProductsPage = () =>{
    const div = document.createElement('div');
    div.classList.add(styles.container)
    GET('products')
        .then(
            data =>data.data.map(product => div.append(productCard(product)))
        )

    return div
}
