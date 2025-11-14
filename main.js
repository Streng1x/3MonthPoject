function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закрываем меню, если кликнули вне него
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};






const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const slidesToShow = 3;
const slidesToScroll = 3;
const slideWidth = slides[0].clientWidth;
let position = 0;

next.addEventListener('click', () => {
  const maxPosition = -(slides.length - slidesToShow) * slideWidth;
  position -= slidesToScroll * slideWidth;
  if (position < maxPosition) position = maxPosition;
  track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener('click', () => {
  position += slidesToScroll * slideWidth;
  if (position > 0) position = 0;
  track.style.transform = `translateX(${position}px)`;
});

