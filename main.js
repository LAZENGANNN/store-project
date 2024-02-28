import './style.css';
import {getHeader} from "./features/header/header";
import {getLayout} from "./features/layaout";
// import { getUserForm } from './features/userForm/getUserForm';

const app = document.querySelector('#app');

app.append(getHeader());
// app.append(getUserForm());
app.append(getLayout());