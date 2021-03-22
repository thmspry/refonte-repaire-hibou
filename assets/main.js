"use strict"

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la Paralax de Materialize
    const paralax = document.querySelectorAll('.parallax');
    const optionsParalax = {};
    const instanceParalax = M.Parallax.init(paralax, optionsParalax);

    // Initialisation du Dropdown-trigger de Materialize
    const dropdown = document.querySelectorAll('.dropdown-trigger');
    const optionsDropdown = {};
    const instanceDropdown = M.Dropdown.init(dropdown, optionsDropdown);

    const caroussel = document.querySelectorAll('.carousel');
    const optionsCaroussel = {
        duration : 200,
        numVisible : 5,
    };

    const element = document.querySelectorAll('.sidenav');
    const options = {}
    const instancess = M.Sidenav.init(elems, options);

});
