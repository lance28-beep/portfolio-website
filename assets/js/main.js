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
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously chose a topic
if(selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    //reset: true // Animations repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin:'right'})
sr.reveal(`.home__name, .home__info, .contact__social,
         .about__container, .section__title-1, .section__title-2, .about__info,
            contact__social, .contact__data`, {origin:'left'})
sr.reveal(`.services__card, .projects__card`, {interval:100})


document.addEventListener('DOMContentLoaded', () => {
    const gridBg = document.querySelector('.grid-bg');
    const cells = [];
    const gridSize = 20; // 20x20 grid
  
    // Create grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      gridBg.appendChild(cell);
      cells.push(cell);
    }
  
    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
  
      cells.forEach((cell, index) => {
        const cellX = (index % gridSize) / gridSize - 0.5;
        const cellY = Math.floor(index / gridSize) / gridSize - 0.5;
        
        const deltaX = mouseX - cellX;
        const deltaY = mouseY - cellY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        const transform = `
          translateZ(${50 * distance}px)
          rotateX(${deltaY * 10}deg)
          rotateY(${deltaX * -10}deg)
        `;
        
        cell.style.transform = transform;
        cell.style.background = `rgba(100, 255, 100, ${0.1 - distance / 2})`;
      });
    });
  
    // Handle window resize
    window.addEventListener('resize', () => {
      cells.forEach(cell => cell.style.transform = '');
    });
  });

// sk-083a181580a34ebdb3a3346fc9fd7735

    // Function to show the chatbot message every minute
    function showMessage() {
        const message = document.getElementById('chatbot-message');
        message.style.display = 'block';
        setTimeout(() => {
          message.style.display = 'none';
        }, 5000); // Hide message after 5 seconds
      }
  
      // Show message every 60 seconds (60000 milliseconds)
      setInterval(showMessage, 60000);
  
      // Function to toggle chat interaction (for future use)
      function toggleChat() {
        alert("Chat feature coming soon!");
      }

      //message button:

      const chatButton = document.querySelector('.chat-button');
      const socialIcons = document.querySelector('.social-icons');

      chatButton.addEventListener('click', () => {
          socialIcons.classList.toggle('active');
          
          // Reset animation
          chatButton.style.animation = 'none';
          setTimeout(() => {
              chatButton.style.animation = 'pulse 2s infinite';
          }, 10);
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
          if (!e.target.closest('.chat-container')) {
              socialIcons.classList.remove('active');
          }
      });