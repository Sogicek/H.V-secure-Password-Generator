document.addEventListener('DOMContentLoaded', function () {
    const passwordElement = document.getElementById('password');
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', function () {
        const minLength = 12;
        const maxLength = 25;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?';
        const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        let password = '';

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        // Display the current password
        passwordElement.textContent = password;
    });
});
