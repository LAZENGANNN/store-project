import {categoryCard} from "../components/categoryCard";
import {getCategories} from "../api/getCategories";
import {button} from "../components/button";
import styles from './homePage.module.css'

export const homePage = () => {
    const div = document.createElement('div');
    
    const categoriesDiv = document.createElement('div')
    categoriesDiv.classList.add(styles.categoriesDiv)

    getCategories('categories')
        .then(
            data => data.data.map(category => categoriesDiv.append(categoryCard(category)))
        )

    div.append(categoriesDiv)
    return div;
};