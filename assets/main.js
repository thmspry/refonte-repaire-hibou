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

    // Initialisation du Caroussel de Materialize
    const caroussel = document.querySelectorAll('.carousel');
    const optionsCaroussel = {
        duration : 200,
        numVisible : 4,
        indicators : true
    };
    const instanceCaroussel = M.Carousel.init(caroussel, optionsCaroussel);

    // Initialisation du Sidenav de Materialize
    const sidenav = document.querySelectorAll('.sidenav');
    const optionsSidenav = {}
    const instancesSidenav = M.Sidenav.init(sidenav, optionsSidenav);

    // Initialisation du Zoom sur image  de Materialize
    const materialboxed = document.querySelectorAll('.materialboxed');
    const optionsImage = {};
    const instancesMaterialboxed = M.Materialbox.init(materialboxed, optionsImage);

    // Initialisation du Scrollspy de Materialize
    const Scrollspy = document.querySelectorAll('.scrollspy');
    const optionsScrollspy = {
        throttle : 100,
        scrollOffset : 400,
        activeClass : 'active'
    }
    const instanceScrollspy = M.ScrollSpy.init(Scrollspy, optionsScrollspy);


    const modal = document.querySelectorAll('.modal');
    const optionsModals = {};
    const instances = M.Modal.init(modal, optionsModals);


});
