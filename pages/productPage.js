import {getProducts} from "../api/getProducts";
import styles from './productPage.module.css'


const createProductPage = (product) =>{
    const div = document.createElement('div')
    console.log(product)

    const imgDiv = document.createElement('div')
    imgDiv.classList.add(styles.imgDiv)
    const img = document.createElement('img')
    imgDiv.append(img)
    img.setAttribute('src', product.image)
    img.classList.add(styles.img)



    div.append(imgDiv)
    return div
}





export const getProductPage = (id) =>{
    const div = document.createElement('div')
    getProducts(`products?id=${id}`)
        .then(
            data =>data.data.map(product => div.append(createProductPage(product)))
        )
    return  div
}