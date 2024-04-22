import './style.css';
import {getHeader} from "./features/header/header";
import {getLayout} from "./features/layaout";
import {getFooter} from "./features/footer/footer";
import {getNotification} from "./features/notification/notification.js";
// import { getUserForm } from './features/userForm/getUserForm';



const app = document.querySelector('#app');

app.classList.add('app');
app.append(getHeader());
app.append(getLayout());
app.append(getNotification())
app.append(getFooter())
