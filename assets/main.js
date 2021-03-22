"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.parallax');
    let options = {};
    const instances = M.Parallax.init(elems, options);

    const elem = document.querySelectorAll('.dropdown-trigger');
    const instance = M.Dropdown.init(elem, options);

    const element = document.querySelectorAll('.sidenav');
    options = {}
    const instancess = M.Sidenav.init(elems, options);

});