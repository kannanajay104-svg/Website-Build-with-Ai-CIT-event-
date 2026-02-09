// DOM elements
const countdownTimer = document.getElementById('countdownTimer');
const homeBtn = document.getElementById('homeBtn');
const exploreBtn = document.getElementById('exploreBtn');
const contactBtn = document.getElementById('contactBtn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const spaceFact = document.getElementById('spaceFact');
const astronaut = document.getElementById('astronaut');
const spaceship = document.getElementById('spaceship');
const satellite = document.getElementById('satellite');
const currentYear = document.getElementById('currentYear');

// Space facts array
const spaceFacts = [
    "Did you know? Space is completely silent because there's no air to carry sound.",
    "The hottest planet in our solar system is Venus, with temperatures reaching 450°C.",
    "A day on Venus is longer than a year on Venus.",
    "There are more stars in the universe than grains of sand on all the beaches on Earth.",
    "The Sun makes up 99.86% of the mass in our solar system.",
    "One million Earths could fit inside the Sun.",
    "Neutron stars can spin at a rate of 600 rotations per second.",
    "The footprints on the Moon will be there for 100 million years.",
    "There is a planet made of diamonds twice the size of Earth.",
    "The largest known asteroid is 965 km (600 miles) wide."
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Initialize countdown
    startCountdown();
    
    // Display random space fact
    showRandomSpaceFact();
    
    // Initialize button event listeners
    initializeButtons();
    
    // Initialize astronaut click animation
    initializeAstronaut();
    
    // Initialize search functionality
    initializeSearch();
});

// Countdown function
function startCountdown() {
    let timeLeft = 10;
    
    const countdownInterval = setInterval(() => {
        countdownTimer.textContent = timeLeft;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            redirectToHome();
        }
    }, 1000);
}

// Redirect to home page (simulated)
function redirectToHome() {
    // In a real scenario, this would redirect to the home page
    // For demo purposes, we'll just show a message
    showNotification("Redirecting to home page...");
    
    // Reset countdown
    setTimeout(() => {
        startCountdown();
    }, 3000);
}

// Show random space fact
function showRandomSpaceFact() {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    spaceFact.textContent = spaceFacts[randomIndex];
    
    // Change fact every 10 seconds
    setInterval(() => {
        const newIndex = Math.floor(Math.random() * spaceFacts.length);
        spaceFact.style.opacity = 0;
        
        setTimeout(() => {
            spaceFact.textContent = spaceFacts[newIndex];
            spaceFact.style.opacity = 1;
        }, 500);
    }, 10000);
}

// Initialize button functionality
function initializeButtons() {
    // Home button
    homeBtn.addEventListener('click', function() {
        showNotification("Taking you back to home...");
        animateButton(this);
        redirectToHome();
    });
    
    // Explore button
    exploreBtn.addEventListener('click', function() {
        showNotification("Exploring the cosmic wonders...");
        animateButton(this);
        
        // Trigger space animations
        triggerSpaceExploration();
    });
    
    // Contact button
    contactBtn.addEventListener('click', function() {
        showNotification("Connecting to mission control...");
        animateButton(this);
        
        // Show a simulated contact form
        setTimeout(() => {
            showNotification("Mission Control: We're searching for your page. Stay tuned!");
        }, 1500);
    });
}

// Animate button click
function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

// Initialize astronaut interaction
function initializeAstronaut() {
    astronaut.addEventListener('click', function() {
        // Make astronaut wave
        const leftArm = document.querySelector('.left-arm');
        const rightArm = document.querySelector('.right-arm');
        
        leftArm.style.animation = 'none';
        rightArm.style.animation = 'none';
        
        setTimeout(() => {
            leftArm.style.transform = 'rotate(-30deg)';
            rightArm.style.transform = 'rotate(30deg)';
            
            setTimeout(() => {
                leftArm.style.transform = 'rotate(30deg)';
                rightArm.style.transform = 'rotate(-30deg)';
                
                setTimeout(() => {
                    leftArm.style.transform = 'rotate(30deg)';
                    rightArm.style.transform = 'rotate(-30deg)';
                    leftArm.style.animation = 'arm-move 3s infinite alternate';
                    rightArm.style.animation = 'arm-move 3s infinite alternate-reverse';
                }, 300);
            }, 300);
        }, 50);
        
        showNotification("👨‍🚀 Astronaut: Need help finding your way?");
    });
}

// Initialize search functionality
function initializeSearch() {
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Perform search
function performSearch() {
    const query = searchInput.value.trim();
    
    if (query) {
        showNotification(`Searching the cosmos for "${query}"...`);
        
        // Animate spaceship to search
        spaceship.style.animation = 'none';
        spaceship.style.left = '5%';
        spaceship.style.top = '20%';
        
        setTimeout(() => {
            spaceship.style.transition = 'all 2s ease';
            spaceship.style.left = '70%';
            spaceship.style.top = '50%';
            
            setTimeout(() => {
                spaceship.style.transition = 'all 2s ease';
                spaceship.style.left = '5%';
                spaceship.style.top = '20%';
                
                setTimeout(() => {
                    spaceship.style.animation = 'spaceship-fly 20s infinite linear';
                    showNotification(`No results found for "${query}" in our cosmic database.`);
                }, 2000);
            }, 2000);
        }, 100);
        
        // Clear input
        searchInput.value = '';
    } else {
        showNotification("Please enter something to search!");
        searchInput.focus();
    }
}

// Trigger space exploration animations
function triggerSpaceExploration() {
    // Make astronaut float higher
    astronaut.style.animation = 'float 3s infinite ease-in-out';
    
    // Speed up spaceship
    spaceship.style.animationDuration = '10s';
    
    // Speed up satellite
    satellite.style.animationDuration = '15s';
    
    // Change planet color
    const planet = document.querySelector('.planet');
    planet.style.background = 'linear-gradient(135deg, #9c27b0, #673ab7)';
    planet.style.boxShadow = '0 0 40px rgba(156, 39, 176, 0.7)';
    
    // Reset after 5 seconds
    setTimeout(() => {
        spaceship.style.animationDuration = '20s';
        satellite.style.animationDuration = '25s';
        planet.style.background = 'linear-gradient(135deg, #ff9a00, #ff5e62)';
        planet.style.boxShadow = '0 0 40px rgba(255, 94, 98, 0.7)';
    }, 5000);
}

// Show notification
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: linear-gradient(135deg, #4fc3f7, #2196f3);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 400px;
        animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
        border-left: 5px solid #ffeb3b;
    `;
    
    // Add keyframe animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; transform: translateX(100%); }
        }
    `;
    
    document.head.appendChild(styleSheet);
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}