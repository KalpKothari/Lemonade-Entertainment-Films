// Bounce photos when they appear on scroll
const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      setTimeout(() => {
        entry.target.classList.remove('in-view');
      }, 800);
    }
  });
}, {
  threshold: 0.5
});

photos.forEach(photo => {
  observer.observe(photo);
});

/* Dropdown */
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