// Scroll animation
const cards = document.querySelectorAll('.spotify-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2,
});

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
  observer.observe(card);
});


        /* Parallax */
        const bg = document.querySelector('.background-animation');
        window.addEventListener('scroll', () => {
          const offset = window.scrollY;
          bg.style.transform = `translateY(${offset * -0.1}px) rotate(${offset * 0.01}deg)`;
        });

        // Dropdown
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

let hideTimeout;

// When cursor enters the main "Our Facilities" button
dropdown.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  dropdownContent.style.display = 'block';
});

// When cursor leaves the "Our Facilities" button
dropdown.addEventListener('mouseleave', () => {
  // Only delay here to allow user to move to dropdown
  hideTimeout = setTimeout(() => {
    dropdownContent.style.display = 'none';
  }, 500); // short delay (e.g., 0.5s) to allow cursor transition
});

// When cursor enters the actual dropdown
dropdownContent.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
});

// When cursor leaves the dropdown — close **immediately**
dropdownContent.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none';
});
