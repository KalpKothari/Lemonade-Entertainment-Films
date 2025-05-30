let images = [];
let currentIndex = 0;

function openPopup(element) {
  const imageList = element.getAttribute('data-images');
  images = imageList.split(',');
  currentIndex = 0;
  document.getElementById('popupOverlay').style.display = 'flex';
  updateImage();
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
  document.getElementById('popupImage').src = '';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function updateImage() {
  const popupImage = document.getElementById('popupImage');
  popupImage.src = images[currentIndex];
}


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