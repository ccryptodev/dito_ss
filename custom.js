

<script>
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.summary-item-list-container');

  if (carousel) {
    console.log('Carousel found !!!');

    const items = carousel.querySelectorAll('.summary-item');
    const scrollAmount = items[0].offsetWidth * 2; 
    
    console.log('Scroll Amount: ', scrollAmount);

    const nextButton = document.querySelector('.summary-carousel-pager-next');
    const prevButton = document.querySelector('.summary-carousel-pager-prev');

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });

      prevButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
  }
});
</script>