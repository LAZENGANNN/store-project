import {getLogo} from "../../components/logo";
import './headerStyle.css'


export const getHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');


    const divLogo = document.createElement('div');
    divLogo.classList.add('divLogo')
    const name = document.createElement('p');
    name.innerText = 'Shop name'
    divLogo.append(getLogo(), name)


    header.append(divLogo);
    //header.append(getLogo());

    return header;
};