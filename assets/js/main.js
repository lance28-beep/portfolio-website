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


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
