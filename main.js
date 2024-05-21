import './style.css';
import {getHeader} from "./features/header/header";
import {getLayout} from "./features/layaout";
import {getFooter} from "./features/footer/footer";
import {getNotification} from "./features/notification/notification.js";
import {getBottomADBanner} from "./features/ad/ADBanner";



const app = document.querySelector('#app');

app.classList.add('app');
app.append(getHeader());
app.append(getBottomADBanner())
app.append(getLayout());
app.append(getNotification())
app.append(getFooter())