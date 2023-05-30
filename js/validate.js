function validateForm() {
    var nameInput = document.querySelector('input[name="Name"]');
    var emailInput = document.querySelector('input[name="Email"]');
    var messageInput = document.querySelector('textarea[name="Message"]');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    var isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}

var textarea = document.getElementById('textArea');
textarea.addEventListener('input', function() {
    if (this.value.trim() === 'Message') {
    this.value = '';
    }
    this.classList.remove('placeholder'); 
});