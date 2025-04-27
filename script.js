// GET ELEMENT BY ID
// console.log(document.getElementById('background'));
// let background = document.getElementById('background');
// background.textContent = 'About';
// console.log('background');

// console.log(document.getElementBy)

let headerTitle =  document.getElementById('headerTitle');
headerTitle.style.borderBottom = 'solid 3px rgb(92, 90, 90)';

// styling the  logo image

let images = document.getElementsByTagName('img');
// console.log(images);
images[0].style.borderRadius = '250%';
images[0].style.border = 'solid 3px rgb(92, 90, 90)';

// slogan style
let slogan = document.getElementsByTagName('p');
// console.log(slogan);
slogan[0].style.fontStyle = 'italic';


// styling the scrolling container
document.querySelectorAll('.scrolling-container').forEach(container => {
    container.style.borderBottom = 'solid 3px rgb(186, 237, 248)';
    container.style.borderTop = 'solid 3px rgb(186, 237, 248)';
  });


// Button Click 
let registerBtn = document.querySelector("button");
registerBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default form submit
    alert("Thank you for booking a test drive!");
});

// Hover effect on logo
let logo = document.querySelector(".logo-header img");
logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.1)";
});
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)";
});

// Change color on button click
registerBtn.addEventListener("click", () => {
    registerBtn.style.backgroundColor = "aqua";
    registerBtn.textContent = "Registered!";
});

// Simple animation on scroll container
let scrollImages = document.querySelector('.scrolling-images');
scrollImages.addEventListener("mouseenter", () => {
    scrollImages.style.animationPlayState = 'paused';
});
scrollImages.addEventListener("mouseleave", () => {
    scrollImages.style.animationPlayState = 'running';
});

// Form Validation

let emailInput = document.getElementById('client_email');
let passwordInput = document.getElementById('user_password');
passwordInput.type = 'password';
passwordInput.placeholder = 'Enter password (min 8 chars)';


// real-time feedback
passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
        passwordInput.style.border = "2px solid red";
    } else {
        passwordInput.style.border = "2px solid green";
    }
});


// Input boxes effects
let inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea, select');

inputs.forEach(input => {
  input.style.border = '2px solid rgb(186, 237, 248)';
  input.style.padding = '8px';
  input.style.borderRadius = '10px';

  input.addEventListener('mouseover', () => {
    input.style.borderColor = 'aqua';
    input.style.backgroundColor = '#f9fff9';
  });

  input.addEventListener('mouseout', () => {
    input.style.borderColor = 'rgb(186, 237, 248)';
    input.style.backgroundColor = 'white';
  });
});
