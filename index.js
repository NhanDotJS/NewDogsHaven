function responsiveNav() {
  var x = document.getElementById("navbar");
  var y = document.getElementsByClassName("content")[0];
  var z = document.getElementById("hamburger");
  if (x.className === "navigation") {
    x.className += " responsive";
    y.className += " responsive";
    z.className = "fa fa-times";
    // z.className += " fa-xmark";
  } else {
    x.className = "navigation";
    y.className = "content";
    z.className = "fa fa-bars";
  }
}
let slideIndex = 0;
window.addEventListener("DOMContentLoaded", (event) => {
  showSlides();
});

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
