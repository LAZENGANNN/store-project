import {GET} from "../api/GET";
import styles from './productPage.module.css'
import {button} from "../components/button";


const createProductPage = (product) =>{
    const div = document.createElement('div')
    div.classList.add(styles.container)
/////////////
    const imgDiv = document.createElement('div')
    imgDiv.classList.add(styles.imgDiv)
    const img = document.createElement('img')
    img.setAttribute('src', product.image)
    img.classList.add(styles.img)

    const buttonDiv = document.createElement('div')
    const buyButton = button('в корзину', null)
    buyButton.classList.add(styles.buyButton)
    buttonDiv.classList.add(styles.buttonDiv)
    buttonDiv.append(buyButton)
    imgDiv.append(img, buttonDiv)


//////////////
    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add(styles.descDiv)

    const title = document.createElement('p')
    title.innerText = product.title
    title.classList.add(styles.title)

    const description = document.createElement('p')
    description.classList.add(styles.desc)
    description.innerText = product.description

    const categoryLink = document.createElement('p')
    categoryLink.innerText = 'Категория: '
    categoryLink.classList.add(styles.catLink)
    const link = document.createElement('a')
    link.innerText = product.category
    link.setAttribute('href', `http://localhost:5173/category/${product.category}`)
    link.setAttribute('title', 'перейти на страницу категории')
    categoryLink.append(link)

    const blocksDiv = document.createElement('div')
    blocksDiv.classList.add(styles.blocksDiv)

    const rate = document.createElement('p')
    rate.innerText = `Рейтинг
    ${product.rating.rate}★`
    rate.classList.add(styles.rate)

    const count = document.createElement('p')
    count.classList.add(styles.count)
    count.innerText = `Оценок
    ${product.rating.count}`


    const price = document.createElement('p')
    price.classList.add(styles.price)
    price.innerText = `Цена
    ${product.price}$   
    `
    blocksDiv.append(rate, price, count)

    descriptionDiv.append(title, description, categoryLink, blocksDiv)
/////////////
    div.append(imgDiv, descriptionDiv)
    return div
}

// "id": 3,
//     "title": "Mens Cotton Jacket",
//     "price": 55.99,
//     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     "category": "man's-clothes",
//     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     "rating": {
//     "rate": 4.7,
//         "count": 500





export const getProductPage = (id) =>{
    const div = document.createElement('div')
    GET(`products?id=${id}`)
        .then(
            data =>data.data.map(product => div.append(createProductPage(product)))
        )
    return  div
}