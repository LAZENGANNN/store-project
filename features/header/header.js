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

    const name = document.createElement('p');
    name.innerText = 'Digital Store'
    buttonLogo.append(logo, name)


    const allProductsButton = button('Все продукты', () => window.location.pathname = 'products')
    allProductsButton.classList.add(styles.allProductsButton)

    header.append(buttonLogo, allProductsButton);
    return header;
};