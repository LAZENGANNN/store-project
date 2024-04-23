import {GET} from "../../api/GET";
import styles from './dailyProduct.module.css'
import {button} from "../button";
import {addToCart} from "../../api/postToCart";
import {showNotification} from "../../features/notification/notification";

const createDailyCard = (product) => {
    const div = document.createElement('div')
    div.classList.add(styles.container)

    const headDiv = document.createElement('div')
    headDiv.innerText = '—————————————Товар Дня—————————————'
    headDiv.classList.add(styles.head)
    ////////////////////////////////////////////
    const contentDiv = document.createElement('div')
    contentDiv.classList.add(styles.contentDiv)

    const imgDiv = document.createElement('div')
    imgDiv.classList.add(styles.imgDiv)
    const img = document.createElement('img')
    imgDiv.append(img)
    img.setAttribute('src', product.image)
    img.classList.add(styles.img)

    const contentDiv2 = document.createElement('div')

    const title = document.createElement('p')
    title.innerText = product.title
    title.classList.add(styles.title)

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add(styles.buttonDiv)
    const buyButton = button('в корзину', () => {
        addToCart(product)
        showNotification(`продукт ${product.title} добавлен в корзину`);
    })
    buyButton.classList.add(styles.buyButton)
    buttonDiv.append(buyButton)
    const showButton = button('посмотреть', ()=> window.location.pathname = `product/${product.id}`)
    showButton.classList.add(styles.buyButton)
    buttonDiv.append(showButton)

    contentDiv2.append(title, buttonDiv)
    contentDiv.append(contentDiv2, imgDiv, )
    div.append(headDiv, contentDiv)
    return div
}


export const getDailyCard = () =>{
    const date = new Date();
    let day = date.getDate()
    if (date.getDate() > 20){
        day = 20
    }
    console.log(day)

    const div = document.createElement('div')

    GET(`products?id=${day}`)
        .then(
            data =>data.data.map(product => div.append(createDailyCard(product)))
        )
    return div
}
