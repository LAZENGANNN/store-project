import {getProducts} from "../api/getProducts";
import styles from "./allProductsPage.module.css";
import {productCard} from "../components/productCard";



export const categoryPage = (category) =>{
    const div = document.createElement('div');
    div.classList.add(styles.container)
    getProducts(`products?category=${category}`)
        .then(
            data =>data.data.map(product => div.append(productCard(product)))
        )
        .then(
            data => console.log(data)
        )
    return div
}
