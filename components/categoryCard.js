import styles from './categoryCard.module.css'
import {button} from "./button";



export const categoryCard = category =>{
    const btn  = button(null, ()=> window.location.pathname = `${category}`)
    btn.classList.add('categoryCard')
    btn.classList.add(styles.container)
    
    
    const img = document.createElement('img')
    const imgDiv = document.createElement('div')
    imgDiv.classList.add(styles.imgDiv)
    img.setAttribute('src', category.image)
    img.classList.add(styles.image)
    imgDiv.append(img)

    const name = document.createElement('p')
    name.innerText = category.name
    name.classList.add(styles.name)


    btn.append(imgDiv, name)
    return btn
}
