import styles from './productCard.module.css'
import {button} from "../button";
import {addToCart} from "../../api/postToCart";
import {removeFromCart} from "../../api/DeletefromCart";


export const productCard = product =>{
    const div = document.createElement('div')
    div.classList.add(styles.container)
    const id = product.id
    div.setAttribute('id', id)

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
    buttonDiv.classList.add(styles.buttonDiv)

    if(window.location.pathname !== '/cart') {
        //const buyButton = button('в корзину', () => addToCart('cart', {id: product.id}))
        const buyButton = button('в корзину', () =>
        {
            addToCart(product);
        })
        buyButton.classList.add(styles.buyButton)
        buttonDiv.append(buyButton)
    }
    else{
        const removeButton = button('убрать из корзины', () => {
            removeFromCart('cart', product.id)
                .then((res) => {
                    const removeItem = document.getElementById(res.data.id)
                    const productContainer = document.getElementById('container')
                    productContainer.removeChild(removeItem)
                })
        })
        removeButton.classList.add(styles.buyButton)
        buttonDiv.append(removeButton)
    }

    const showButton = button('посмотреть', ()=> window.location.pathname = `product/${product.id}`)
    showButton.classList.add(styles.buyButton)
    buttonDiv.append(showButton)


    div.append(title,imgDiv,price,buttonDiv)
    return div
}

// id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'