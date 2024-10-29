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


let confirmSignIn = document.querySelector('.signin-confirm');
let signinValues = document.querySelectorAll('.signin-item input');
let agreement = document.getElementById('agreement');

confirmSignIn.onclick = () => {
    let allValid = true; 

    signinValues.forEach(inp => {
        if (inp.value.trim() === '') {
            inp.classList.add('invalid-feedback');
            allValid = false;
        } else {
            inp.classList.remove('invalid-feedback');
        }
    });

    if (!agreement.checked) {
        agreement.parentElement.classList.add('invalid-feedback-agreement');
    } else if (agreement.checked) {
        agreement.parentElement.classList.remove('invalid-feedback-agreement');
    }
};
