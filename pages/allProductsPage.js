import {getProducts} from "../api/getProducts";
import {productCard} from "../components/productCard";
import styles from './allProductsPage.module.css'



export const allProductsPage = () =>{
    const div = document.createElement('div');
    div.classList.add(styles.container)
    getProducts('products')
        .then(
            data =>data.data.map(product => div.append(productCard(product)))
        )

    return div
}
