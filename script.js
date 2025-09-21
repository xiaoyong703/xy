// Main JavaScript functionality for XY Website

// Show welcome message when CTA button is clicked
function showMessage() {
    alert('Welcome to XY! This website is ready for your customization.\n\nYou can now add your specific features and content.');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Navigation click handling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Highlight active navigation item on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add some interactive elements
    console.log('XY Website loaded successfully!');
    console.log('Ready for customization and additional features.');
});

// Utility function for future API calls or dynamic content
async function loadContent(endpoint) {
    try {
        // Placeholder for future API integration
        console.log(`Loading content from: ${endpoint}`);
        // const response = await fetch(endpoint);
        // const data = await response.json();
        // return data;
        return { message: "Content loading functionality ready for implementation" };
    } catch (error) {
        console.error('Error loading content:', error);
        return null;
    }
}

// Theme toggle functionality (for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Form handling utility (for future contact forms)
function handleFormSubmit(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        console.log('Form submitted:', Object.fromEntries(formData));
        // Add actual form submission logic here
        alert('Form submission functionality ready for implementation!');
    });
}