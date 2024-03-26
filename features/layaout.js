import {homePage} from "../pages/homePage";
import {allProductsPage} from "../pages/allProductsPage";
import {categoryPage} from "../pages/categotyPage";
import {getProductPage} from "../pages/productPage";


const slicePathname = (pathname, number) =>{
    const arr = pathname.split('/')
    return arr[number]
}



export const getLayout = () => {
    const div = document.createElement('div');

    const pathname = window.location.pathname;
    const prePathname = slicePathname(pathname, 1)
    const pastPathname = slicePathname(pathname, 2)

    console.log(prePathname, pastPathname)
    if (pathname === '/') {
        div.append(homePage());
    }
    else if (prePathname === 'products') {
        div.append(allProductsPage());
    }
    else if (prePathname === 'category') {
        div.append(categoryPage(pastPathname));
    }
    else if (prePathname === 'product'){
        div.append(getProductPage(pastPathname));
    }
    else {
        // Обработка неизвестного пути
        alert('неизвестный путь');
    }

    return div;
}








// export const getLayout = () => {
//     const pathname = window.location.pathname;
//     console.log(pathname);
//     const div = document.createElement('div');
//
//     switch (pathname) {
//         case '/':
//             div.append(homePage());
//             break;
//         case '/products':
//             div.append(allProductsPage());
//             break;
//         case '/jewelery':
//         case '/electronics':
//         case `/women's-clothes`:
//         case `/man's-clothes`:
//             div.append(categoryPage(pathname.slice(1)));
//             break;
//         default:
//             // Обработка неизвестного пути
//             alert('неизвестный путь')
//             break;
//     }
//
//     return div;
// }