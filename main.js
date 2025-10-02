document.addEventListener('DOMContentLoaded', function() {

  // --- Language Switching ---
  const typingPhrases = {
    en: ["Jr. Full-Stack Java Developer", "Creative Problem Solver", "Lifelong Learner"],
    es: ["Desarrollador Jr. Full-Stack Java", "Solucionador Creativo de Problemas", "Aprendiz de por Vida"]
  };
  let currentLanguage = 'en';
  let typeTimeout;
  const langToggleButton = document.getElementById('lang-toggle');

  function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = currentLanguage;

    // Update button text
    langToggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    
    const elementsToTranslate = document.querySelectorAll('[data-lang-en]');
    elementsToTranslate.forEach(el => {
      const key = currentLanguage;
      el.textContent = el.dataset[`lang${key}`];
    });

    initializeTypingEffect();
  }

  langToggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    switchLanguage(newLang);
  });


  // --- Typing Effect ---
  function initializeTypingEffect() {
    clearTimeout(typeTimeout);
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const phrases = typingPhrases[currentLanguage];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex--);
      } else {
        typingText.textContent = currentPhrase.substring(0, charIndex++);
      }

      let typeSpeed = isDeleting ? 75 : 150;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }
      typeTimeout = setTimeout(type, typeSpeed);
    }
    type();
  }


  // --- Scroll Animations ---
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  fadeInElements.forEach(el => observer.observe(el));


  // --- Back to Top Button ---
  const backToTopButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  // --- Initial Load ---
  initializeTypingEffect();
});

