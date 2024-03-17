import {getLogo} from "../../components/logo";
import {button} from "../../components/button";
import './headerStyle.css'


export const getHeader = () => {





    const header = document.createElement('header');
    header.classList.add('header');

    const buttonLogo = button(null, ()=> window.location.pathname = '/')
    buttonLogo.classList.add('divLogo')



        const name = document.createElement('p');
        name.innerText = 'Shop name'
        buttonLogo.append(getLogo(), name)
    //
    // homeButton.append(divLogo)
    // header.append(homeButton);
    header.append(buttonLogo);
    // //header.append(getLogo());

    return header;
};