const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const STORAGE_KEY = 'savedUsername';

// Load saved username on page load 
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    username.value = saved;
    validateField(username);
  }
});

// Save username to localStorag
username.addEventListener('input', () => {
  localStorage.setItem(STORAGE_KEY, username.value);
});

// Real-time validation: attach input listeners 
[username, email, password, confirmPassword].forEach(input => {
  input.addEventListener('input', () => {
 // Update any custom validity rules first
 updateCustomValidity(input);
    // Then reflect the message in the corresponding span
validateField(input);
    // If confirmnPassword or password changed
if (input === password || input === confirmPassword) {
    updateCustomValidity(confirmPassword);
    validateField(confirmPassword);
    }
  });
});

// update custom validity messages
function updateCustomValidity(input) {
// Clear previous custom validity
  input.setCustomValidity('');

if (input === username) {
     if (input.validity.valueMissing) {
      input.setCustomValidity('Please enter a username.');
    } else if (input.validity.tooShort) {
      input.setCustomValidity('Username must be at least 5 characters.');
    }
  }

if (input === email) {
    if (input.validity.valueMissing) {
      input.setCustomValidity('Please enter your email address.');
    } else if (input.validity.typeMismatch) {
      input.setCustomValidity('Please enter a valid email address.');
    }
  }

 if (input === password) {
    if (input.validity.valueMissing) {
      input.setCustomValidity('Please choose a password.');
    } else if (input.validity.tooShort) {
      input.setCustomValidity('Password must be at least 8 characters.');
    }
  }

if (input === confirmPassword) {
    if (input.validity.valueMissing) {
      input.setCustomValidity('Please confirm your password.');
    } else if (confirmPassword.value !== password.value) {
      input.setCustomValidity('Passwords do not match.');
    }
  }
}

// clear the error message
function validateField(input) {
  const idMap = {
    username: usernameError,
    email: emailError,
    password: passwordError,
    confirmPassword: confirmPasswordError
  };

  const span = idMap[input.id];
  // Use check if valid
  if (input.checkValidity()) {
    span.textContent = '';
  } else {
    span.textContent = input.validationMessage;
  }
}

// On submit, prevent submission if invalid and show messages 
form.addEventListener('submit', (e) => {
  // Update custom validity for all fields before checking
  [username, email, password, confirmPassword].forEach(updateCustomValidity);

  if (!form.checkValidity()) {
    e.preventDefault();
    // Show messages for all fields
    [username, email, password, confirmPassword].forEach(validateField);
    // Focus the first invalid field for accessibility
    const firstInvalid = form.querySelector(':invalid');
    if (firstInvalid) firstInvalid.focus();
  } else {
    localStorage.setItem(STORAGE_KEY, username.value);
    // Allow normal submission to proceed
  }
});