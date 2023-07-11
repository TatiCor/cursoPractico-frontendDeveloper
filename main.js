const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');

const toggleDesktopMenu = (event) => {
    console.log('click');
    event.preventDefault();
    desktopMenu.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu);
