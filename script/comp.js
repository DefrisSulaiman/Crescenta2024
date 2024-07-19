// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.redirect');
    const newPath = 'https://drive.google.com/drive/folders/15vOu1o5ePpSTQyuS2vTjYBHDzI_xqCq_?usp=sharing'; // Ganti dengan path yang diinginkan

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = newPath;
        });
    });
});
