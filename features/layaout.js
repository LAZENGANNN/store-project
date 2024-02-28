import {homePage} from "../pages/homePage";
import {allProductsPage} from "../pages/allProductsPage";

export const getLayout = () => {
    const div = document.createElement('div')
    if (window.location.pathname === '/') {
        div.append(homePage());
    }
    if (window.location.pathname === '/products'){
        div.append(allProductsPage());
    }
    return div
}