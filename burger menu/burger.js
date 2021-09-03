"use strict"

/*Бургек клик меню*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

 if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
 }



/************Прокрутка при клике**************/


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLinks =>{
        menuLinks.addEventListener("click", onMenuLinkClick);
    });
    
    function onMenuLinkClick(e){
        const menuLinks = e.target;
        if (menuLinks.dataset.goto && document.querySelector(menuLinks.dataset.goto)){
            const gotoBlock = document.querySelector(menuLinks.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
                                                                                        /**** Отнимаем высоту шапки если она не скрывается****/
        if (iconMenu.classList.contains('_active')){
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
        
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
           }
    }
}   
