/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e) =>{
    e.preventDevault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_kbyiinc','template_mg62wp9','#contact-form','ZLFTsikxYTonmdzw7')

    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
           contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

