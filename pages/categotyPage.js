import {getProducts} from "../api/getProducts";
import styles from "./categoryPage.module.css";
import {productCard} from "../components/productCard";



export const categoryPage = (categoryName) =>{
    const div = document.createElement('div');
    div.classList.add(styles.container)
    const container = document.createElement('div');
    container.classList.add(styles.container)

    getProducts(`products?category=${categoryName}`)
        .then(
            data =>data.data.map(product => div.append(productCard(product)))
        )
        .then(
            data => console.log(data)
        )

    return div
}
