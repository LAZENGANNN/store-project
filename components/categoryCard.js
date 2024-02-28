import styles from './categoryCard.module.css'

export const categoryCard = category =>{
    const div = document.createElement('div')
    div.classList.add('categoryCard')
    div.classList.add(styles.container)
    
    
    const img = document.createElement('img')
    const imgDiv = document.createElement('div')
    imgDiv.classList.add(styles.imgDiv)
    img.setAttribute('src', category.image)
    img.classList.add(styles.image)
    imgDiv.append(img)

    const name = document.createElement('p')
    name.innerText = category.name
    name.classList.add(styles.name)


    div.append(imgDiv, name)
    return div
}
