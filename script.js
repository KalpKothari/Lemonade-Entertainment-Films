// Animate on scroll (optional future extension)
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".section");
    const triggerBottom = window.innerHeight * 0.85;
  
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("show");
      }
    });
  });

  function clearForm() {
    // Optional: Add a small delay to ensure form submission is complete before clearing
    setTimeout(function() {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, 1000);  // 1 second delay after form submission
  }

  const modal = document.getElementById("bookingModal");
const confirmationModal = document.getElementById("confirmationModal");
const closeModal = document.getElementById("closeModal");
const closeConfirmationModal = document.getElementById("closeConfirmationModal");
const closeConfirmationButton = document.getElementById("closeConfirmationButton");

// Open booking modal
document.getElementById("bookMeetingBtn").onclick = function () {
  modal.style.display = "block";
};

// Close booking modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Close confirmation modal
closeConfirmationModal.onclick = closeConfirmationButton.onclick = function () {
  confirmationModal.style.display = "none";
};

// Close modals on outside click
window.onclick = function (event) {
  if (event.target === modal) modal.style.display = "none";
  if (event.target === confirmationModal) confirmationModal.style.display = "none";
};

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // prevent page reload

  // Optional: clear form fields
  event.target.reset();

  // Close booking modal and show confirmation
  modal.style.display = "none";
  confirmationModal.style.display = "block";

  return false; // to prevent default form behavior
}

function openTimePicker() {
    const timePicker = document.getElementById("time-picker");
    timePicker.style.display = "block";  // Show the time picker dropdown
  }
  
  // Set the selected time into the input box
  function setTime() {
    const hour = document.getElementById("hour").value;
    const minute = document.getElementById("minute").value;
    const ampm = document.getElementById("ampm").value;
  
    // Combine the selected values to show in the format HH:MM AM/PM
    const formattedTime = `${hour}:${minute} ${ampm}`;
    document.getElementById("meeting-time").value = formattedTime;  // Update the input field
  
    // Hide the time picker after selection
    document.getElementById("time-picker").style.display = "none";
  }


  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // This ensures it resets when scrolled up
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    // Select all sections or containers you want to animate
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  

  const quotes = [
    "Telling Stories That Speak Without Words.",
    "Capturing Moments, Creating Memories.",
    "Where Every Frame Breathes Emotion.",
    "Painting Life Through the Lens.",
    "Moments Fade, Stories Stay Forever.",
    "Turning Ordinary Days into Cinematic Dreams.",
    "Framing Life, One Story at a Time.",
    "Let Your Moments Unfold Like a Film.",
    "Because Every Love Story Deserves a Spotlight."
  ];

  const element = document.getElementById("typewriter-text");
  let quoteIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = quotes[quoteIndex];
    element.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 60); // Typing speed
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50); // Deleting speed
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        quoteIndex = (quoteIndex + 1) % quotes.length;
      }
      setTimeout(typeEffect, 1500); // Pause between full texts
    }
  }

  typeEffect();

      //Dropdown
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
      