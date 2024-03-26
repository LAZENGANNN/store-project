import styles from './productCard.module.css'
import {button} from "./button";


export const productCard = product =>{
    const div = document.createElement('div')
    div.classList.add(styles.container)


    const title = document.createElement('p')
    title.innerText = product.title
    title.classList.add(styles.title)

    const imgDiv = document.createElement('div')
    imgDiv.classList.add(styles.imgDiv)
    const img = document.createElement('img')
    imgDiv.append(img)
    img.setAttribute('src', product.image)
    img.classList.add(styles.img)


    const price = document.createElement('p')
    price.innerText = `${product.price}$`
    price.classList.add(styles.price)


    // const category = document.createElement('p')
    // category.innerText = product.category
    const buttonDiv = document.createElement('div')



    const buyButton = button('в корзину', null)
    buyButton.classList.add(styles.buyButton)
    buttonDiv.classList.add(styles.buttonDiv)

    const showButton = button('посмотреть', ()=> window.location.pathname = `product/${product.id}`)
    showButton.classList.add(styles.buyButton)
    buttonDiv.append(buyButton, showButton)


    div.append(title,imgDiv,price,buttonDiv)
    return div
}

// id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'