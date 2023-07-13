const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const hamburguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu.inactive')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart.inactive');



menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartAside);


function toggleDesktopMenu(event) {
    event.preventDefault();
    
    let asideClosed = aside.classList.contains('inactive');
    
    if (!asideClosed) {
        aside.classList.add('inactive');   
    }   
    
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    let asideClosed = aside.classList.contains('inactive');

    if(!asideClosed){ 
       aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    let mobileMenuClosed = mobileMenu.classList.contains('inactive');
    let desktopMenuClosed = desktopMenu.classList.contains('inactive')
    

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');      
    }

    aside.classList.toggle('inactive');
    
 
    
}