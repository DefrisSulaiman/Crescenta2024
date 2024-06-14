window.onload = function() {
    // Ketika semua elemen telah dimuat, sembunyikan loader
    var loader = document.getElementById("loader");
    loader.style.display = "none";
};

document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach(faq => {
      const question = faq.querySelector('.question');
      const answer = faq.querySelector('.answer');
      const caret = question.querySelector('img');
  
      question.addEventListener('click', () => {
        // Tutup semua FAQ lain
        faqs.forEach(otherFaq => {
          if (otherFaq !== faq) {
            const otherAnswer = otherFaq.querySelector('.answer');
            const otherCaret = otherFaq.querySelector('.question img');
            otherAnswer.classList.remove('answer-visible');
            otherCaret.classList.remove('caret-rotate');
          }
        });
  
        // Toggle FAQ yang diklik
        const isVisible = answer.classList.toggle('answer-visible');
        requestAnimationFrame(() => {
          if (isVisible) {
            caret.classList.add('caret-rotate');
          } else {
            caret.classList.remove('caret-rotate');
          }
        });
      });
    });
  });