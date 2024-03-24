import {homePage} from "../pages/homePage";
import {allProductsPage} from "../pages/allProductsPage";
import {categoryPage} from "../pages/categotyPage";



export const getLayout = () => {
    const pathname = window.location.pathname;
    console.log(pathname);
    const div = document.createElement('div');

    switch (pathname) {
        case '/':
            div.append(homePage());
            break;
        case '/products':
            div.append(allProductsPage());
            break;
        case '/jewelery':
        case '/electronics':
        case `/women's-clothes`:
        case `/man's-clothes`:
            div.append(categoryPage(pathname.slice(1)));
            break;
        default:
            // Обработка неизвестного пути
            alert('неизвестный путь')
            break;
    }

    return div;
}