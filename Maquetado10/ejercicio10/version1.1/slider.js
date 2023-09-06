var slideIndex = 1;
showSlides(slideIndex);
//control de los botones siguiente y antes
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// control de img
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/*
funcion la cual toma el valor de nuestro boton
para asi poder ejecutar dicha funcion con ayuda
de css
*/
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var n =1;
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 1; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}