

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

var eye = document.getElementsByClassName("eye")//Display "none" for all with class eye
for(i = 0; i < eye.length; i++)
{
  eye[i].style.display = "none";
}
function page(i)//Switch page
{
  while(i != 3)
  {
    eye[i].style.display = "flex";
    if(i < 1)
    {
      j = i - 1
      eye[j].style.display = "none" //faulty
    }
    setTimeout(page ,1000)
  }
}

/*var eye1 = document.getElementById("Shape1");
var eye2 = document.getElementById("Shape2");
var eye3 = document.getElementById("Shape3");
var eye4 = document.getElementById("Shape4");

eye1.style.display = "none"; //Display "none" for all pages
eye2.style.display = "none";
eye3.style.display = "none";
eye4.style.display = "none";

function page1() //Switch pages
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

}*/

console.log(start)

for(i = 0; i < start.length; i++) //For every button with the class start: add a start function
{
  start[i].onclick = function()
  {
    header.style.display= "none";
    rules.style.display = "none"; //Display none for all eccept load and later game
    load.style.display = "block"; 
    if(load.style.display = "block") //Load page function on load
    {
      page(0)
    }
  };
  
};

});


//////////////////////////////////////////////////////////////////////////////////////////////