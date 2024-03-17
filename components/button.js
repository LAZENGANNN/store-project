import './buttonsStyles.css'

export const button = (text, callBack) => {
    const btn = document.createElement('button');
    btn.innerText = text;
    if (callBack) {
        btn.addEventListener('click', () => callBack());
    }
    return btn;
};