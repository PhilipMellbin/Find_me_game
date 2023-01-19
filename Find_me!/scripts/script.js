

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
function page(eye, i)//Switch page
{
  if(i == 4)
  {
    console.log("game loads now") //Loads at the last page
  }
  eye[i].style.display = "flex"; //Loads the curent page and removes the last one
  console.log("page switched");
  if(i > 0)
  {
    eye[i - 1].style.display = "none";
    console.log("last page removed");
  }

}

for(i = 0; i < start.length; i++) //For every button with the class start: add a start function
{
  start[i].onclick = function()
  {
    header.style.display= "none";
    rules.style.display = "none"; //Display none for all eccept load and later game
    load.style.display = "block"; 
    if(load.style.display = "block") //Load page function on load
    {
      for(i = 0; i < eye.length; i ++ )
      {
        setTimeout(page(eye, i), 1000); //Semes to ignore setTimeout
      }
    }
  };
  
};

});


//////////////////////////////////////////////////////////////////////////////////////////////