

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

//////////////////////////////////////////////////////////////////////////////////////////////(Declare variables)
var start = document.getElementsByClassName("start");//Load in class names and ID:s
var eye = document.getElementsByClassName("eye");
var header = document.getElementById("noticeme");//Load in class names
var rules = document.getElementById("Rules");
var load = document.getElementById("Load");
var game = document.getElementById("Game");
var countdown = document.getElementById("countdown");
var button = document.getElementsByClassName("ball");

var collors = ["blank", "red", "green", "blue"];
var curentcollor = "blank"
var iris = document.getElementById(curentcollor) //needs to be id in order to change. So just define id as the only non game one(blank)

/////////////////////////////////////////////////////////////////////////////////////////////(Preset conditions)
load.style.display = "none";
game.style.display = "none";
for(i = 0; i < eye.length; i++) 
{
  eye[i].style.display = "none";
}
////////////////////////////////////////////////////////////////////////////////////////////////////(Functions)
function switchcollor(collors, iris, curentcollor) //Switch collor
{
  var col = 0;
  while (col == 0)
  {
    col = Math.floor(Math.random() * 4);//generate random number
  }
  console.log("collor selected: " + collors[col]);
  iris.id = (collors[col]); //retrieve the collor from collors array
  console.log(iris.id);
  curentcollor = collors[col];
  console.log(curentcollor);
  
}
function waitforme(ms) //Delay function for "for" loops
{
  return new Promise( resolve => 
    {
      setTimeout(()=> {resolve('')},ms );
    })
}
async function page(eye)//Switch page
{
  for(var i = 0; i < eye.length; i++) //For every item in list eye
  {
    countdown.innerHTML = (4 - (i + 1))
    eye[i].style.display = "flex"; 
    console.log("on page " + i) //Display page
    await waitforme(1000)
    if(i != 3) //If on the final bage, just leave it
    {
      eye[i].style.display = "none";
    }
  }
  game.style.display = "block";
  switchcollor(collors, iris, curentcollor);

}
/////////////////////////////////////////////////////////////////////////////////////////////////(On clicks)


for(i = 0; i < start.length; i++) //For every button with the class start: add a start function
{
  start[i].onclick = function()
  {
    header.style.display= "none";
    rules.style.display = "none"; //Display none for all eccept load and later game
    load.style.display = "block"; 
    if(load.style.display == "block") //Load page function on load
    {
      page(eye)
    }
  };
  
};

});


//////////////////////////////////////////////////////////////////////////////////////////////