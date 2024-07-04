// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.redirect');
    const newPath = 'https://drive.google.com/file/d/1gC7fJ9Tr-zkg753G5HZJm_kacg_OlxQn/view'; // Ganti dengan path yang diinginkan

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = newPath;
        });
    });
});
