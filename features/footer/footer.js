import styles from "./footerStyle.module.css"







export const getFooter = () =>{
    const footer = document.createElement('footer')
    footer.classList.add(styles.footer)
    footer.innerText = 'footer'


    return footer
}