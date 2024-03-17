import styles from './productCard.module.css'




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
    price.innerText = `${product.price}`


    const category = document.createElement('p')
    category.innerText = product.category


    div.append(title,imgDiv,price,category)
    return div
}

// id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'