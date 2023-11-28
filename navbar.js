const menuToggle = document.querySelector('.menu-toggle-container input')
const nav = document.querySelector('.nav-right-mobile')
const MenuToggleIcon = document.querySelector('.menu-toggle-container .menu-toggle')
const categoriesMenu = document.querySelector('.categories');
const categoriesContainer = document.querySelector('.categories-container');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    MenuToggleIcon.classList.toggle('rotate');
});

document.addEventListener('DOMContentLoaded', function () {
    function showCategories() {
        categoriesContainer.classList.add('visible');
    }

    function hideCategories() {
        categoriesContainer.classList.remove('visible');
    }

    function toggleCategories() {
        if (window.innerWidth < 900) {
            categoriesContainer.classList.toggle('visible');
        }
    }

    categoriesMenu.addEventListener('click', toggleCategories);
    categoriesMenu.addEventListener('mouseover', showCategories);
    categoriesMenu.addEventListener('mouseout', hideCategories);

    categoriesContainer.addEventListener('mouseover', showCategories);
    categoriesContainer.addEventListener('mouseout', hideCategories);
});
