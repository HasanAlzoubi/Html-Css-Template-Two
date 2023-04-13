const toggleMenu = document.querySelector('.toggle-menu');
const navList = document.querySelector('header nav ul');


toggleMenu.addEventListener('click', function () {
    if (navList.style.display === 'none') {
        navList.style.display = 'flex';
        navList.style.flexDirection  = 'column';
    } else {
        navList.style.display = 'none';
    }
});
