import {button} from "../../components/button.js";
import styles from './ADstyle.module.css'

export const getBottomADBanner = () =>{
    let isShowed = false


    const div = document.createElement('div')
    div.classList.add(styles.container)
    div.classList.add(styles.startAnimation)
    setTimeout(()=> div.classList.add(styles.setEndMargin), 3999)
    // const mainButton = button(null, () => window.location = 'https://www.casino.org/games/free/')

    const mainButton = button(null,  null)
    mainButton.classList.add(styles.mainButton)

    const cancelDiv = document.createElement('div')
    cancelDiv.classList.add(styles.cancelDiv)
    const cancelButton = button(null, ()=>
    {
        isShowed = true
        div.classList.add(styles.showed)

    })
    cancelButton.classList.add(styles.cancelButton)




    // mainButton.append(cancelButton)
    // div.append(mainButton)
    cancelDiv.append(cancelButton)
    div.append(cancelDiv)
    return div
}