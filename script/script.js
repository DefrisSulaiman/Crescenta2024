window.onload = function () {
  // Ketika semua elemen telah dimuat, sembunyikan loader
  let loader = document.getElementById("loader");
  loader.style.display = "none";
};

// script.js
window.onload = function () {
  const popupPoster = document.getElementById('popupPoster');
  const closePopup = document.getElementById('closePopup');

  // Munculkan pop-up dengan animasi setelah 2 detik
  setTimeout(function () {
      popupPoster.classList.remove('hidden');
      popupPoster.classList.add('show');
  }, 2000);

  // Fungsi untuk menutup pop-up ketika tombol silang ditekan
  closePopup.onclick = function () {
      popupPoster.style.display = 'none';
  }

  // Fungsi untuk menutup pop-up ketika area luar pop-up ditekan
  window.onclick = function (event) {
      if (event.target == popupPoster) {
          popupPoster.style.display = 'none';
      }
  }
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

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

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    console.log("Scroll Y: ", window.scrollY, "50vh: ", window.innerHeight * 0.5);
    const navbar = document.querySelector('nav');
    const mobile = document.querySelector('.mob')

    if (window.scrollY >= window.innerHeight * 0.2) {
      navbar.style.width = '70%';
      navbar.style.borderRadius = '50px';
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
      navbar.style.backdropFilter = 'blur(25px)';
      navbar.style.marginTop = '20px';

      mobile.style.width = '70%'
      mobile.style.paddingTop = '0px'
      mobile.style.marginTop = '120px'
      mobile.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
      mobile.style.backdropFilter = 'blur(25px)';
      mobile.style.borderRadius = '20px';
    } else {
      navbar.style.width = '100%';
      navbar.style.borderRadius = '0';
      navbar.style.marginTop = '0';

      mobile.style.width = '100%'
      mobile.style.paddingTop = '80px'
      mobile.style.marginTop = '0px'
      mobile.style.borderRadius = '0px';
    }
  });
});

document.getElementById('checkbox').addEventListener('change', function () {
  const nav = document.querySelector('.mob');
  if (this.checked) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});