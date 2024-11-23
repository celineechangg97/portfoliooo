window.addEventListener("load", function(){
   //select all elements you want to animate
   const elements = document.querySelectorAll(".fade-in");

   //add the visible class to each element to trigger the css transition
   elements.forEach((element, index) => {
      this.setTimeout(() => {
         element.classList.add("visible");
      }, index*100) // delay for staggered effect
   });
});


window.addEventListener("load", function() {
   const letters = document.querySelectorAll(".name-letter");
   letters.forEach(letter => {
     letter.classList.add("visible");
   });
 });
 

 document.addEventListener('scroll', () => {
   document.documentElement.style.setProperty('--scrollY', window.scrollY);
});

/*
const correctPassword = "chang123";

    function checkPassword() {
      const passwordInput = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');
      
      if (passwordInput === correctPassword) {
        // Redirect to the protected page
        window.location.href = "index.html";
      } else {
        // Show error message
        errorMessage.textContent = "Incorrect password. Please try again.";
      }
    }
      */

    const correctPassword = "chang123";

    function checkPassword() {
      const passwordInput = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');
      const container = document.getElementById('password-container');

      if (passwordInput === correctPassword) {
        // Redirect to the protected page
        window.location.href = "index.html";
      } else {
        // Add shake animation
        errorMessage.textContent = "Incorrect password. Please try again.";
        container.classList.add('shake');

        // Remove the shake class after the animation duration
        setTimeout(() => {
          container.classList.remove('shake');
        }, 500); // Match animation-duration in CSS
      }
    }



/*
    document.addEventListener('DOMContentLoaded', () => {
      const sectionTitles = document.querySelectorAll('.section-title');
  
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
      };
  
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.color = '#FF046D'; // Example of highlighting active title
              } else {
                  entry.target.style.color = '#2D2D2D'; // Reset when out of view
              }
          });
      }, observerOptions);
  
      sectionTitles.forEach((title) => observer.observe(title));
  });
  */
  




//Modal for images//
  
// Get modal elements
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail'); // Select all thumbnails

// Add event listeners to all thumbnail images
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = thumbnail.src; // Set the clicked image's src to the modal
  });
});

// Close the modal when clicking the close button
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
