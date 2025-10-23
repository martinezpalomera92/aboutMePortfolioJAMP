/**
 * main.js
 * Core JavaScript logic for the portfolio site.
 * Handles language switching, typing animation, scroll observations, and UI controls.
 */
document.addEventListener('DOMContentLoaded', function() {

  // --- Language Switching Configuration ---
  const typingPhrases = {
    en: ["Jr. Full-Stack Java Developer", "Creative Problem Solver", "Lifelong Learner"],
    es: ["Desarrollador Jr. Full-Stack Java", "Solucionador Creativo de Problemas", "Aprendiz de por Vida"]
  };
  let currentLanguage = 'en';
  let typeTimeout;
  const langToggleButton = document.getElementById('lang-toggle');

  /**
   * Switches the site's content language between English ('en') and Spanish ('es').
   * @param {string} lang - The new language code ('en' or 'es').
   */
  function switchLanguage(lang) {
    currentLanguage = lang;
    // Set the language attribute on the HTML element for accessibility and CSS
    document.documentElement.lang = currentLanguage;

    // 1. Update the language toggle button text (e.g., 'EN' -> 'ES')
    langToggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    
    // 2. Handle the page's <title> element translation
    const titleElement = document.querySelector('title');
    const titleLangAttr = currentLanguage === 'en' ? 'data-lang-en' : 'data-lang-es';
    titleElement.textContent = titleElement.getAttribute(titleLangAttr);

    // 3. Translate all elements using the data-lang-en selector
    const elementsToTranslate = document.querySelectorAll('[data-lang-en]');
    elementsToTranslate.forEach(el => {
      // Use the correct camelCase property name for dataset access (e.g., 'langEs')
      const key = currentLanguage === 'en' ? 'langEn' : 'langEs'; 
      const newText = el.dataset[key];
      
      // Update textContent if the translated data attribute exists
      if (newText) {
          el.textContent = newText;
      }
      // Note: If 'newText' is undefined, the original text is preserved, 
      // preventing content from disappearing.
    });

    // 4. Restart the typing effect to display the new language phrase
    initializeTypingEffect();
  }

  // --- Typing Effect Logic ---
  /**
   * Initializes and runs the dynamic typewriter effect on the hero text.
   */
  function initializeTypingEffect() {
    // Clear any existing timeout to stop the previous effect iteration
    clearTimeout(typeTimeout);
    const typingText = document.getElementById('typing-text');
    // Exit if the target element isn't found
    if (!typingText) return;

    const phrases = typingPhrases[currentLanguage];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    /**
     * Recursive function to handle the typing and deleting steps.
     */
    function type() {
      const currentPhrase = phrases[phraseIndex];
      // Update the visible text
      typingText.textContent = currentPhrase.substring(0, charIndex); 

      // Increment/decrement the character index based on the current mode (typing/deleting)
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      // Set typing speed: faster for deleting, slower for typing
      let typeSpeed = isDeleting ? 75 : 150;

      // Logic to switch from typing to deleting mode
      if (!isDeleting && charIndex > currentPhrase.length) {
        typeSpeed = 2000; // Pause at the end of the phrase
        isDeleting = true;
        charIndex = currentPhrase.length;
      // Logic to switch from deleting to typing mode (start next phrase)
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        // Cycle to the next phrase in the array
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before starting the next phrase
        charIndex = 0; 
      }
      // Schedule the next 'type' iteration
      typeTimeout = setTimeout(type, typeSpeed);
    }
    
    // Start the effect
    type();
  }


  // --- Scroll Animations (Intersection Observer) ---
  const fadeInElements = document.querySelectorAll('.fade-in');

  /**
   * Observer to trigger 'is-visible' class addition when elements enter the viewport.
   * Uses a threshold of 0.1 (10% visibility).
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Good Practice: Stop observing elements once they are visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Attach the observer to all elements marked for fade-in animation
  fadeInElements.forEach(el => observer.observe(el));


  // --- Back to Top Button Visibility ---
  const backToTopButton = document.querySelector('.back-to-top');

  // Listen for scroll events on the window
  window.addEventListener('scroll', () => {
    // Toggle the 'active' class based on vertical scroll position
    if (window.scrollY > 100) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  // --- Initial Setup ---
  // Initialize the site in the default English language on load.
  // This correctly sets the initial UI state and starts the typing effect.
  switchLanguage('en'); 

  // --- Event Listener for Language Toggle ---
  langToggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Determine the next language
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    // Switch the language
    switchLanguage(newLang);
  });
});