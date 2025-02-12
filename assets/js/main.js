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

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport  height, and the show-scroll class to the a tag with the scroll up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                         : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections =  document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectiionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                    sectiionsClass.classList.add('active-link')
                }else{
                    sectiionsClass.classList.remove('active-link')
                }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
