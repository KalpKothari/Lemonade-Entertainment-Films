const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.gallery-card');

function showInitialImages() {
  cards.forEach(card => {
    if (card.classList.contains('initial')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const type = button.getAttribute('data-type');

    if (type === 'all') {
      showInitialImages();
    } else {
      cards.forEach(card => {
        if (card.getAttribute('data-type') === type) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
});

// Show only initial ones on page load
window.onload = showInitialImages;


function openPopup() {
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('corporateVideo');

  popup.style.display = 'flex';
  video.currentTime = 0;
  video.play();
}

function closePopup() {
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('corporateVideo');

  video.pause();
  video.currentTime = 0;
  popup.style.display = 'none';
}


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
