import {GET} from "../api/GET";
import {productCard} from "../components/productCard";
import styles from './anyProductsPage.module.css'



export const getAnyProductPage = (type, pastPathname) =>{
    console.log(type)
    const div = document.createElement('div')
    div.classList.add(styles.container)
    // GET('products')
    //     .then(
    //         data =>data.data.map(product => div.append(productCard(product)))
    //     )
    const getGETpathname = () => {
        if (type === 'products') {
            return type
        }
        else if  (type === 'category') {
            return `products?category=${pastPathname}`
        }
        else if (type === 'cart') {
            div.setAttribute('id', 'container')
            return 'cart'
        }
    }

    const url = getGETpathname()
    console.log(url)
    GET(url)
        .then(
            data =>data.data.map(product => div.append(productCard(product)))
    )


return div
}