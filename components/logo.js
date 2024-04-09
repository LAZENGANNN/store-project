import './componentsStyle.css'
import styles from "../features/footer/footerStyle.module.css";

export const getLogo = () => {
    const img = document.createElement('img')
    img.classList.add('logo')
    img.setAttribute('src','../images/logo.png')
    return img
}


