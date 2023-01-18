

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("info");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "flex";
  }
}


document.addEventListener("DOMContentLoaded", function()
{
console.log("succesfully loaded website")

//////////////////////////////////////////////////////////////////////////////////////////////
var start = document.getElementsByClassName("start");
var header = document.getElementById("noticeme");//Load in class names
var rules = document.getElementById("Rules");
var load = document.getElementById("Load");

var eye1 = document.getElementById("Shape1");
var eye2 = document.getElementById("Shape2");
var eye3 = document.getElementById("Shape3");
var eye4 = document.getElementById("Shape4");

eye1.style.display = "none";
eye2.style.display = "none";
eye3.style.display = "none";
eye4.style.display = "none";

function page1()
{
  console.log("page1");
  eye1.style.display = "flex";
}
function page2()
{
  console.log("page2")
  eye1.style.display = "none";
  eye2.style.display = "flex";
}
function page3()
{
  console.log("page3")
  eye2.style.display = "none";
  eye3.style.display = "flex";

}

console.log(start)

for(i = 0; i < start.length; i++)
{
  start[i].onclick = function()
  {
    header.style.display= "none";
    rules.style.display = "none";
    load.style.display = "block"; 
    if(load.style.display = "block")
    {
      setTimeout(page1(), 10000);
      setTimeout(page2(), 10000);
      setTimeout(page3(), 10000);
    }
  };
  
};

});


//////////////////////////////////////////////////////////////////////////////////////////////