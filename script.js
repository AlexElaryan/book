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


let phoneInp = document.querySelector('.phone-number');
let phoneRegex = /^\+?\d*$/;

phoneInp.oninput = (e) => {
    if (!phoneRegex.test(e.target.value)) {
        e.target.value = e.target.value.slice(0, -1);
    }
};

let confirmSignIn = document.querySelector('.signin-confirm');
let signinValues = document.querySelectorAll('.signin-item input');
let agreement = document.getElementById('agreement');
let email = document.querySelector('.email');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

    if (!email.value.match(emailRegex)) {
        email.classList.add('invalid-feedback');
    } else if (email.value.match(emailRegex)) {
        email.classList.remove('invalid-feedback');
    };
};

let signInForm = document.getElementById('signInForm');
emailjs.init("FZ4f4ge2RT8M7ZHFE");

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const templateParams = {
        from_name: 'support@levkazaryan.com',
        reply_to: 'support@levkazaryan.com',
        to_name: document.getElementById("name").value,
        to_email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };



    emailjs.send("service_x95w9fn", "template_91p13uq", templateParams)
        .then(response => {
            console.log("Email sent successfully!", response.status, response.text);
            window.location = 'book.html';
        })
        .catch(error => {
            console.error("Failed to send email:", error);
        });

});
