"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.parallax');
    const options = {};
    const instances = M.Parallax.init(elems, options);

    var elem = document.querySelectorAll('.dropdown-trigger');
    var instance = M.Dropdown.init(elem, options);
});