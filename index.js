
const bannerSlides = document.querySelectorAll('.slide');
const bannerPagination = document.querySelector('.pagination');
const bannerPrevArrow = document.querySelector('.prev-arrow');
const bannerNextArrow = document.querySelector('.next-arrow');
let currentBannerSlide = 0;

// Generate bullets
bannerSlides.forEach((slide, index) => {
  const bullet = document.createElement('div');
  bullet.classList.add('bullet');
  if (index === 0) {
    bullet.classList.add('active');
  }
  bannerPagination.appendChild(bullet);
});

const bannerBullets = document.querySelectorAll('.bullet');

// Function to show slide
function showBannerSlide() {
  bannerSlides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentBannerSlide) {
      slide.classList.add('active');
    }
  });
  bannerBullets.forEach((bullet, index) => {
    bullet.classList.remove('active');
    if (index === currentBannerSlide) {
      bullet.classList.add('active');
    }
  });
}

// Function to go to next slide
function nextBannerSlide() {
  currentBannerSlide = (currentBannerSlide + 1) % bannerSlides.length;
  showBannerSlide();
}

// Function to go to previous slide
function prevBannerSlide() {
  currentBannerSlide = (currentBannerSlide - 1 + bannerSlides.length) % bannerSlides.length;
  showBannerSlide();
}

// Event listeners for arrows
bannerNextArrow.addEventListener('click', nextBannerSlide);
bannerPrevArrow.addEventListener('click', prevBannerSlide);

// Event listeners for bullets
bannerBullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentBannerSlide = index;
    showBannerSlide();
  });
});

// Auto slide
setInterval(nextBannerSlide, 3000);

showBannerSlide();




const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.5
});

animateElements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.2}s`;
  observer.observe(element);
});


// footer

const animateFooterElements = document.querySelectorAll('.animate-footer');

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.5
});

animateFooterElements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.2}s`;
  footerObserver.observe(element);
});