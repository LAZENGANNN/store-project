import {categoryCard} from "../components/cards/categoryCard";
import {getCategories} from "../api/getCategories";
import {getDailyCard} from "../components/cards/dailyProductCard";
import styles from './homePage.module.css'
import './page.css'

export const homePage = () => {
    const div = document.createElement('div');
    div.classList.add(styles.container, 'page')
    div.append(getDailyCard())


    const categoriesDiv = document.createElement('div')
    categoriesDiv.classList.add(styles.categoriesDiv)

    getCategories('categories')
        .then(
            data => data.data.map(category => categoriesDiv.append(categoryCard(category)))
        )

    div.append(categoriesDiv)
    return div;
};