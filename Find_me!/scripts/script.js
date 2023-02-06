

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
var score = document.getElementById("score")

var collors = ["blank", "red", "green", "blue"];
var curentcollor = "blank"
var points = 0
var total = 0
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
  iris.id = (collors[col]); //retrieve the collor from collors array
  console.log("collor selected: " + iris.id)
  curentcollor = collors[col];
  return(curentcollor);
  
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

}
function Click(button, i, points) //Click function(Can't "onclick" directly(https://www.youtube.com/watch?v=aZbgE3yhC2o&t=342s))
  {
    button[i].onclick = function()
    {
      console.log(button[i].id);
      if(button[i].id == curentcollor) //if the buttons id is equal to the curent color
      {
        points++
        score.innerHTML = points;
      }
      curentcollor = switchcollor(collors, iris, curentcollor); //switch collors and log the corect one
      console.log("corect collor: " + curentcollor);
    }
    return points //return points for counting
  }
function register(time, check)
{
  if(check = false)
  {
    var left = left - time;
    score.innerHTML = left;
  }
}
function deleat(time)
{
  time = time - 1;
  return(time);
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
      curentcollor = switchcollor(collors, iris, curentcollor);
      console.log("SELECTED " + curentcollor)
    }
  };
};
for(i = 0; i < button.length; i++) //Add on click function for 
{ //Aparently can't put button[i].id directly in if section.
  points = Click(button, i, points);
  score.innerHTML = points;
}
total = total + points;
score.innerHTML = total;
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