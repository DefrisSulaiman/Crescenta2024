// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.redirect');
    const newPath = 'https://drive.google.com/file/d/1Zljf3ynlZ7EybNSNZv9JnHAAzSz2yjgC/view'; // Ganti dengan path yang diinginkan

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = newPath;
        });
    });
});
