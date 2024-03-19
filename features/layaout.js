import {homePage} from "../pages/homePage";
import {allProductsPage} from "../pages/allProductsPage";
import {categoryPage} from "../pages/categotyPage";

export const getLayout = () => {
    const pathname = window.location.pathname
    console.log(pathname)
    const div = document.createElement('div')
    if (window.location.pathname === '/') {
        div.append(homePage());
    }
    if (window.location.pathname === '/products'){
        div.append(allProductsPage());
    }
    if (window.location.pathname === `/jewelery` || window.location.pathname === `/electronics` || window.location.pathname === `/women's-clothes` || window.location.pathname === `/man's-clothes`){
        div.append(categoryPage(pathname.slice(1)));
    }
    return div
}