// This file contains the main functionality of the web application.

document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('about-link');
    const homeLink = document.getElementById('home-link');

    if (aboutLink) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'about.html';
        });
    }

    if (homeLink) {
        homeLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Additional interactive features can be added here
});