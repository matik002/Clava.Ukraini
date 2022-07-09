let leftMargen = 0

const firstImege = document.querySelector('.first_imeg')
const leftButton = document.querySelector('#left_button')
const rightButton = document.querySelector('#right_button')

leftButton.onclick = () => {
    leftMargen =  leftMargen - 300

firstImege.style.marginLeft = leftMargen + 'px'
};
