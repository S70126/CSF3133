/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

// Select the toggle button and the password field
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

// Add a click event listener to the button
togglePassword.addEventListener('click', function () {
    // Check the current type of the password field
    const isPasswordHidden = passwordField.type === 'password';

    // Toggle the type attribute of the password field
    passwordField.type = isPasswordHidden ? 'text' : 'password';

    // Toggle the icon class for the eye symbol
    const icon = this.querySelector('i');
    if (isPasswordHidden) {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash'); // Closed eye when password is visible
    } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye'); // Open eye when password is hidden
    }
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
