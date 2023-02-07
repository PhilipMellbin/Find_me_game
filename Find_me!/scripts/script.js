

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
var button = document.getElementsByClassName("ball");
var score = document.getElementById("score");
var time = document.getElementById("time")
score.innerHTML = 0;

var collors = ["blank", "red", "green", "blue"];
var curentcollor = "blank";
var points = 0;

var left = 0; //Initial time(will be 10 seconds when started)
var SubMiss = 0; //Subtract(misclick)

var iris = document.getElementById(curentcollor); //needs to be id in order to change. So just define id as the only non game one(blank)

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
  iris.id = (collors[col]); //retrieve the collor from collors array
  console.log("collor selected: " + iris.id)
  curentcollor = collors[col];
  return(curentcollor);
  
}
function Click(button, i) //Click function(Can't "onclick" directly(https://www.youtube.com/watch?v=aZbgE3yhC2o&t=342s))
  {
    button[i].onclick = function()
    {
      console.log(button[i].id);
      if(button[i].id == curentcollor) //if the buttons id is equal to the curent color
      {
        points++;
        score.innerHTML = points;
      }
      else
      {
        SubMiss++;
        left = left - SubMiss;
      }
      curentcollor = switchcollor(collors, iris, curentcollor); //switch collors and log the corect one
      console.log("corect collor: " + curentcollor);
    }
  }
function count()
{
  console.log("tick")
  left--
  console.log("left: " + left)
  time.innerHTML = left
  if(left == 0)
  {
    SubMiss = 0
    console.log("reset")
    end();
  }
  else
  {
    time.innerHTML = left
    console.log("tock")
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////(On clicks)

for(i = 0; i < start.length; i++) //For every button with the class start: add a start function
{
  start[i].onclick = function()
  {
    header.style.display= "none";
    rules.style.display = "none"; //Display none for all eccept load and later game
    game.style.display = "block"; 
    if(game.style.display == "block") //Load page function on load
    {
      eye[3].style.display = "flex";
      curentcollor = switchcollor(collors, iris, curentcollor);
      console.log("SELECTED " + curentcollor)
      left = 11
      time.innerHTML = left
      interval = window.setInterval(function()
      {count()}, 1000);
    }
  };
};
for(i = 0; i < button.length; i++) //Add on click function for 
{ //Aparently can't put button[i].id directly in if section.
  Click(button, i)
}
});


//////////////////////////////////////////////////////////////////////////////////////////////
/*var x = button[i].id; //Resets the selected collor
  console.log(x);
  console.log(iris.id);
  if (x == iris.id) //if the curentcollor
  {
    button[i].onclick = function() 
    {
      points = points + 1;
      score.innerHTML = score + 1;
      switchcollor(collors, iris, curentcollor);
    }
  }
  else
  {
    console.log("wrong collor");
  }*/