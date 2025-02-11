/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu Show
// validate if constant exist

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// Menu Hiddent
if(navClose){
    navClose.addEventListener('click',()=> {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu =  document.getElementById('nav-menu')
    //When click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when you scroll is greater than 50 viewport height, and the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll',shadowHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {

    e.preventDefault()

    //ServiceID - template - #form - publicKey
    emailjs.sendForm('service_itxfpq8','template_xlr53ge','#contact-form','1MPWDzeALq9L05koW')
    .then(() => {
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        },5000)

        //Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
