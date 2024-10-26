document.addEventListener('DOMContentLoaded', () => {
    // NAVIGATION SHADOW
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  
    // SCROLLING CAROUSEL
    const carouselContainers = document.querySelectorAll('.category--carousel');
  
    carouselContainers.forEach(container => {
      console.log(container); // Debug log
      const carousel = container.querySelector('.carousel--list');
      const prevButton = container.querySelector('.carousel-button.prev');
      const nextButton = container.querySelector('.carousel-button.next');
      const carouselItems = carousel.querySelectorAll('.carousel--item');
      
      console.log(carousel, prevButton, nextButton); // Debug log
  
      if (carouselItems.length > 0) {
        const firstItem = carouselItems[0];
        const scrollAmount = firstItem.offsetWidth + parseInt(getComputedStyle(firstItem).marginRight);
        console.log(`Scroll amount: ${scrollAmount}`); // Debug log
  
        // Event listeners for each carousel
        prevButton.addEventListener('click', () => {
          carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        });
  
        nextButton.addEventListener('click', () => {
          carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        });
      } else {
        console.warn('No carousel items found.');
      }
    });
});
