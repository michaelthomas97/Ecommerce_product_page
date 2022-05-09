const hamburger = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll(".nav_item").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove('active');
}));


hamburger.addEventListener('click', function onClick(event) {
  const box = document.getElementById('op');

  box.style.backgroundColor = 'black';

  // 👇️ optionally change text color
  // box.style.color = 'white';
});



let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }