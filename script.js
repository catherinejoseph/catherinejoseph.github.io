function toggleMenu (){
    var menuToggle = document.querySelector ('.toggle');
    var menu = document.querySelector ('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}

const dropdown = document.querySelector('.drop-down');

const list = document.querySelector('.list');

dropdown.addEventListener('click', () => {
    list.classList.toggle('show');
})
const dropdown2 = document.querySelector('.drop-down2');

const list2 = document.querySelector('.list2');

dropdown2.addEventListener('click', () => {
    list2.classList.toggle('show');
})
const dropdown4 = document.querySelector('.drop-down4');

const list4 = document.querySelector('.list4');

dropdown4.addEventListener('click', () => {
    list4.classList.toggle('show');
})
const dropdown3 = document.querySelector('.drop-down3');

const list3 = document.querySelector('.list3');

dropdown3.addEventListener('click', () => {
    list3.classList.toggle('show');
})
const dropdown5 = document.querySelector('.drop-down5');

const list5 = document.querySelector('.list5');

dropdown5.addEventListener('click', () => {
    list5.classList.toggle('show');
})
const dropdown6 = document.querySelector('.drop-down6');

const list6 = document.querySelector('.list6');

dropdown6.addEventListener('click', () => {
    list6.classList.toggle('show');
})