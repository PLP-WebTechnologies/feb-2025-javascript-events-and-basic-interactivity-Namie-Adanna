// Event Handling
const colorButton = document.getElementById('colorButton');
const hoverBox = document.getElementById('hoverBox');
const keypressDisplay = document.getElementById('keypressDisplay');
const secretButton = document.getElementById('secretButton');

// Button color change
colorButton.addEventListener('click', () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorButton.style.backgroundColor = randomColor;
});

// Hover effects
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = '#3498db';
    hoverBox.style.color = 'white';
    hoverBox.textContent = 'Hover activated!';
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = '#ecf0f1';
    hoverBox.style.color = '#333';
    hoverBox.textContent = 'Hover over me!';
});

// Keypress detection
document.addEventListener('keydown', (event) => {
    keypressDisplay.textContent = `Key pressed: ${event.key}`;
    keypressDisplay.style.backgroundColor = '#3498db';
    keypressDisplay.style.color = 'white';
    setTimeout(() => {
        keypressDisplay.style.backgroundColor = '#f9f9f9';
        keypressDisplay.style.color = '#333';
    }, 200);
});

// Secret double-click action
secretButton.addEventListener('dblclick', () => {
    secretButton.style.animation = 'shake 0.5s';
    secretButton.textContent = '🎉 Secret Revealed! 🎉';
    setTimeout(() => {
        secretButton.style.animation = '';
        secretButton.textContent = 'Double click for surprise!';
    }, 2000);
});

// Image Gallery
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg',
    'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg'
];

let currentImageIndex = 0;

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentImageIndex];
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Real-time validation
function validateInput(input, validationFn) {
    const message = input.nextElementSibling;
    const isValid = validationFn(input.value);
    
    if (!isValid) {
        input.style.borderColor = '#e74c3c';
        message.style.color = '#e74c3c';
    } else {
        input.style.borderColor = '#2ecc71';
        message.style.color = '#2ecc71';
        message.textContent = '✓';
    }
}

username.addEventListener('input', () => {
    validateInput(username, value => {
        if (value.length < 3) {
            username.nextElementSibling.textContent = 'Username must be at least 3 characters';
            return false;
        }
        return true;
    });
});

email.addEventListener('input', () => {
    validateInput(email, value => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            email.nextElementSibling.textContent = 'Please enter a valid email address';
            return false;
        }
        return true;
    });
});

password.addEventListener('input', () => {
    validateInput(password, value => {
        if (value.length < 8) {
            password.nextElementSibling.textContent = 'Password must be at least 8 characters';
            return false;
        }
        return true;
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Final validation before submission
    const isUsernameValid = username.value.length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const isPasswordValid = password.value.length >= 8;

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        alert('Form submitted successfully!');
        form.reset();
        // Reset validation styles
        [username, email, password].forEach(input => {
            input.style.borderColor = '#ddd';
            input.nextElementSibling.textContent = '';
        });
    }
});