
const hambugar = document.querySelector('.hambuger');
const mobile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('.header.container');
const anchor_list =document.querySelector('ul li a')
const top_up =document.querySelector('.top_up');

hambugar.addEventListener('click',()=>{

    hambugar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{

    var scroll_position = window.scrollY;
    if(scroll_position || anchor_list > 250){
        header.style.backgroundColor= 'rgb(31, 201, 82)';
    }
    else{

        header.style.backgroundColor= 'transparent';
    }
     
 })



