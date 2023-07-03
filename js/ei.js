window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
  document.getElementById("progress-bar").innerHTML =
    Math.round(scrolled) + "%";
}

/*Slide show*/

var slideIndex = 0;
showSlide(slideIndex);
// Auto slide every 3 seconds
var slideInterval = setInterval(function() {
  changeSlide(1);
}, 3000);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("mySlides");
  var captions = document.getElementsByClassName("caption");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    captions[i].style.display = "none";
  }
  slides[slideIndex].classList.add("active");
  captions[slideIndex].style.display = "block";

}
