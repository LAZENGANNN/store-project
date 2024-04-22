import styles from './notification.module.css'




export const showNotification = (text) =>{
    const notif = document.getElementById('notif')
    notif.innerText = text



    notif.classList.toggle(styles.show)
    setTimeout(() => notif.classList.toggle(styles.show), 1500);
}

export const getNotification = () =>{
    const div = document.createElement('div')
    div.classList.add(styles.container)
    div.setAttribute('id', 'notif')


    return div
}





// notif.classList.add(styles.visible)
// setTimeout(() => {
//         notif.classList.remove(styles.visible)
//         notif.classList.add(styles.hidden)
//     },
//     1500);