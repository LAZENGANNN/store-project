import {categoryCard} from "../components/categoryCard";
import {getCategories} from "../api/getCategories";
import {getDailyCard} from "../components/dailyProductCard";
import styles from './homePage.module.css'

export const homePage = () => {
    const div = document.createElement('div');
    div.classList.add(styles.container)

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