import {getLogo} from "../../components/logo";
import {button} from "../../components/button";
import styles from './headerStyle.module.css'


export const getHeader = () => {
    const header = document.createElement('header');
    header.classList.add(styles.header);
    const buttonLogo = button(null, ()=> window.location.pathname = '/')
    buttonLogo.classList.add(styles.buttonLogo)

    const logo = getLogo()
    logo.classList.add(styles.logo)

    const h1 = document.createElement('h1');
    const name = document.createElement('p');
    h1.append(name)
    name.innerText = 'Digital Store'
    name.classList.add(styles.name)
    buttonLogo.append(logo, h1)

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add(styles.buttonDiv)

    const allProductsButton = button('Все продукты', () => window.location.pathname = 'products')
    allProductsButton.classList.add(styles.allProductsButton)

    const cartButton = button('Корзина', () => window.location.pathname = `cart`)
    cartButton.classList.add(styles.allProductsButton)

    buttonDiv.append(allProductsButton, cartButton)
    header.append(buttonLogo, buttonDiv);
    return header;
};