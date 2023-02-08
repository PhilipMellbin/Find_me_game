

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
var header = document.getElementById("noticeme");
var rules = document.getElementById("Rules");
var load = document.getElementById("Load");
var game = document.getElementById("Game");
var gameover = document.getElementById("GameOver")

var button = document.getElementsByClassName("ball");
var score = document.getElementById("score");
var time = document.getElementById("time")
/////////////////////////////////////////////////////////////////////////////////////////////(Preset conditions)
load.style.display = "none";
game.style.display = "none"; //Make load and game invicible
gameover.style.display = "none";

var collors = ["blank", "red", "green", "blue"]; //load in collors
var curentcollor = "blank"; //first collor has to be defined as id
var iris = document.getElementById(curentcollor); //get first collor id

var points = 0; //initial points start from zero
score.innerHTML = points;

var left = 0; //Initial time(will be 10 seconds when started)
var SubMiss = 0; //Subtract(misclick)

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
function Click(button, i) //Click function(Can't "onclick" directly in for loop(https://www.youtube.com/watch?v=aZbgE3yhC2o&t=342s))
  {
    button[i].onclick = function() //Add on click function for the n:th button
    {
      console.log(button[i].id);
      if(button[i].id == curentcollor)
      {
        points++;
        score.innerHTML = points; //If click on the corect collor, add a point
        if(left < 30)
        {
          left++
        }
      }
      else
      {
        SubMiss++;
        left = left - SubMiss; //If misclick, left will decrease linearly
      }
      curentcollor = switchcollor(collors, iris, curentcollor); //switch collors and log the corect one
      console.log("corect collor: " + curentcollor);
    }
  }
function count() //time function
{
  console.log("tick")
  left-- //subtract time
  console.log("left: " + left)
  time.innerHTML = left //display the time left
  if(left <= 0)
  {
    game.style.display = "none"
    gameover.style.display = "block";
    eye[4].style.display = "flex"
    SubMiss = 0
    console.log("reset")
    clearInterval(interval);    
  }
  else
  {
    time.innerHTML = left
    console.log("tock")
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////(Aplication of functions and variables)
for(i = 0; i < eye.length; i++) //set all eyes to invisible
{
  eye[i].style.display = "none";
}
for(i = 0; i < start.length; i++) //Add start function for every start button
{
  console.log(i)
  start[i].onclick = function() //on click function
  {
    console.log("button no." + i)
    header.style.display= "none";
    rules.style.display = "none"; //Make only game vissible
    game.style.display = "block"; 
    if(game.style.display == "block") //Once the game is visible...
    {
      eye[3].style.display = "flex"; //make the eye visible
      curentcollor = switchcollor(collors, iris, curentcollor); //switch collor from blank
      console.log("SELECTED " + curentcollor)
      left = 10 //the time left(10 seconds start time)
      time.innerHTML = left 
      interval = window.setInterval(function(){count()}, 1000); //set timeout intervalt for count
    }
  };
};
for(i = 0; i < button.length; i++) //Add on click function for every "ball" button
{ 
  Click(button, i)
}
});


//////////////////////////////////////////////////////////////////////////////////////////////
/*function waitforme(ms) //Delay function for "for" loops
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

}*/