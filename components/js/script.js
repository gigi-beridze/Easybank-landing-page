const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElemes = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

btnHamburger.addEventListener('click', () => {
    if(header.classList.contains('open')){ // close hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElemes.forEach((element) => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }else{ // open hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElemes.forEach((element) => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})