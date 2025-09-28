// src/index.js
import "./styles.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";
import { loadContactPage } from "./contact.js";

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load homepage content initially
    loadHomePage();
    
    // Set up navigation functionality
    initializeNavigation();
});

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the tab name
            const tab = this.getAttribute('data-tab');
            
            // Clear current content and load new tab content
            clearContent();
            handleNavigation(tab);
        });
    });
}

function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
}

function handleNavigation(tab) {
    switch(tab) {
        case 'home':
            loadHomePage();
            break;
        case 'menu':
            loadMenuPage();
            break;
        case 'about':
            loadAboutPage();
            break;
        case 'contact':
            loadContactPage();
            break;
        default:
            loadHomePage();
    }
}