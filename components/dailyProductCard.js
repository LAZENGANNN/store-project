

// const chooseDaily = () =>{
//     const date = new Date();
//     let day = date.getDate()
//     if (date.getDate() > 20){
//         day = day + 20
//     }
//     return day
// }






import {GET} from "../api/GET";
import styles from './dailyProduct.module.css'

const createDailyCard = (product) => {
    const div = document.createElement('div')
    div.classList.add(styles.container)

    const headDiv = document.createElement('div')
    headDiv.innerText = 'Товар Дня'
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


    contentDiv.append(imgDiv, contentDiv2)
    div.append(headDiv, contentDiv)
    return div
}


export const getDailyCard = () =>{
    const date = new Date();
    let day = date.getDate()
    if (date.getDate() > 20){
        day = day + 20
    }
    console.log(day)

    const div = document.createElement('div')

    GET(`products?id=${day}`)
        .then(
            data =>data.data.map(product => div.append(createDailyCard(product)))
        )
    return div
}
