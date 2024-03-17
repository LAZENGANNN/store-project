import {homePage} from "../pages/homePage";
import {allProductsPage} from "../pages/allProductsPage";
import {categoryPage} from "../pages/categotyPage";

export const getLayout = () => {
    const div = document.createElement('div')
    if (window.location.pathname === '/') {
        div.append(homePage());
    }
    if (window.location.pathname === '/products'){
        div.append(allProductsPage());
    }
    if (window.location.pathname === '/jewelery'){
        div.append(categoryPage('jewelery'));
    }
    return div
}