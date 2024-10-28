let popup = document.querySelector('.popup-filter');
let closePopup = document.querySelector('.signin-close');
let openPopup = document.querySelectorAll('.red-btn');

openPopup.forEach(btn => {
    btn.onclick = () => {
        popup.style.scale = '1';
        document.body.style.overflow = 'hidden';
    }
})    

closePopup.onclick = () => {
    popup.style.scale = '0';
    document.body.style.overflow = 'auto';
}