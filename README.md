Here is a complete README.md file for your Jaime Martínez Portfolio project, generated using the content and structure of your provided HTML, CSS, and JavaScript files.

It includes sections for the project overview, features, technologies, setup, and key code practices.

Markdown

# 🧑‍💻 Jaime Martínez | Junior Full-Stack Developer Portfolio

This is the personal portfolio of Jaime Armando Martínez Palomera, showcasing his skills, experience, and projects as a Junior Full-Stack Java Developer. The site features a clean, responsive design, dynamic animations, and full bilingual support (English and Spanish).

## ✨ Key Features

* **Bilingual Interface:** Full **English** (`en`) and **Spanish** (`es`) support, easily toggled via a navigation button. All main content, titles, and metadata are translated using `data-*` attributes and controlled via JavaScript.
* **Dynamic Typing Effect:** An engaging typewriter animation in the hero section cycles through the developer's key titles: "Jr. Full-Stack Java Developer," "Creative Problem Solver," and "Lifelong Learner."
* **Scroll Animations:** Sections dynamically **fade in** and **slide up** as the user scrolls them into view, implemented using the **Intersection Observer API** for optimized performance.
* **Responsive Design:** Built on **Bootstrap 5** to ensure optimal display and user experience across all devices (mobile, tablet, and desktop).
* **Clean Structure:** Clear separation of content into dedicated sections: About, Skills, Experience, Education, Certifications, and Contact.

---

## 🛠️ Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript | Core structure, styling, and dynamic functionality. |
| **Frameworks** | Bootstrap 5 | Responsive grid system and UI components. |
| **Styling** | Custom CSS, Google Fonts (`Poppins`) | Custom theme colors, modern typography, and layout adjustments. |
| **Icons** | Font Awesome 6 | Used for skill, education, certification, and contact icons. |
| **Tooling** | Intersection Observer API | Used in `main.js` for highly performant scroll animations. |

---

## 🚀 Setup and Installation

This is a static website and does not require any build process or server-side setup.

1.  **Clone the repository (if hosted):**
    ```bash
    git clone [repository-url]
    cd jaime-martinez-portfolio
    ```
2.  **Open in Browser:**
    Simply open the `index.html` file in your preferred web browser.

### Project Structure

├── index.html # Main structure, content, and data attributes for translation ├── style.css # All custom styling and variables 
├── main.js # Core JavaScript logic (Language switching, typing, animations) └── img/ # Directory for images (favicon, profile image)


---

## 💡 Code Highlights

### Language Switching (main.js)

The project implements a robust bilingual system that avoids reliance on heavy third-party libraries.

1.  **HTML Data Attributes:** Content is translated using `data-lang-en` and `data-lang-es` attributes.
    ```html
    <h2 data-lang-en="About Me" data-lang-es="Sobre Mí">About Me</h2>
    ```
2.  **JavaScript Logic:** The `switchLanguage` function reads the appropriate attribute (using the correct **camelCase** property access, e.g., `el.dataset.langEs`) and updates the element's `textContent`.

### Scroll Animations (main.js)

The `fade-in` animation is controlled by the **Intersection Observer API**, which is more efficient than listening to continuous scroll events.

```javascript
// main.js snippet
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing to ensure the animation only runs once
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});
CSS Variables (style.css)
All primary, secondary, and background colors are managed via CSS Custom Properties (:root), allowing for quick and scalable theme changes.

CSS

/* style.css snippet */
:root {
    --primary-color: #3457D5;
    --primary-hover: #2a45a8;
    /* ... other variables ... */
}
📧 Contact
Feel free to reach out for collaboration or opportunities:

Email: martinezpalomera92@gmail.com

LinkedIn: martinezpalomera92

GitHub: martinezpalomera92