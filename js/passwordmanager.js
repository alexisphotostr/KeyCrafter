document.getElementById('submit').onclick = function() {
    let userLength = parseInt(document.getElementById('input').value, 10);

    if (isNaN(userLength) || userLength < 1) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    if (userLength > 50) {
        alert('Password length is too big. Please enter a number less than or equal to 50.');
        return;
    }

    const password = generatePassword(userLength);
    if (password) {
        document.getElementById('generated-password').textContent = `${password}`;
    }
};

document.getElementById('copy').addEventListener('click', function() {
    var passwordElement = document.getElementById('generated-password');
    if (passwordElement.textContent) {
        navigator.clipboard.writeText(passwordElement.textContent)
            .then(() => {
                alert('The password has been copied to the clipboard!');
            })
            .catch(err => {
                console.error('error during the copy :', err);
                alert('failed to copy the password');
            });
    } else {
        alert('Please generate a password first');
    }
});


function generatePassword(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (document.getElementById('letters').checked) characters += letters;
    if (document.getElementById('bigLetters').checked) characters += bigLetters;
    if (document.getElementById('numbers').checked) characters += numbers;
    if (document.getElementById('special').checked) characters += special;

    if (characters === '') {
        alert('Please select at least one character type.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}



window.onload = function() {
    var video = document.getElementById('video-background');
    if (video) {
        video.playbackRate = 0.7;
    }
};
