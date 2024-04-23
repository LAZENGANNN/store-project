import styles from "./footerStyle.module.css"







export const getFooter = () =>{
    const footer = document.createElement('footer');
    footer.classList.add(styles.footer)
    const div1 = document.createElement('div');
    div1.classList.add(styles.div)
    const license = document.createElement('ul')
    license.innerText = 'Digital Store'
    const copyright = document.createElement('li')
    copyright.innerText = '2024 ©'
    license.append(copyright)
    div1. append(license)

    const div2 = document.createElement('div');
    div2.classList.add(styles.div)
    const support = document.createElement('ul')
    support.innerText = 'Контакты'
    const tgLi = document.createElement('li')
    const tg = document.createElement('a')
    tg.innerText = 'Telegram'
    tg.setAttribute('href', `https://t.me/LAZENGANN`)
    tgLi.classList.add(styles.tg)
    tgLi.append(tg)

    const discordLi = document.createElement('li')
    const discord = document.createElement('a')
    discord.innerText = 'Discord'
    discord.setAttribute('href', `https://discord.com/invite/bjdY3yqM`)
    discordLi.classList.add(styles.gmail)
    discordLi.append(discord)
    support.append(tgLi, discordLi)
    div2. append(support)

    const div3 = document.createElement('div');


    const div4 = document.createElement('div');




    footer.append(div1, div2)
    return footer
}