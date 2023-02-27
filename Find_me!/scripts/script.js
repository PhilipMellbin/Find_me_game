

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
  if (n > (slides.length - 1)) {slideIndex = 1}
  if (n < 1) {slideIndex = (slides.length - 1)}
  for (i = 0; i < (slides.length - 1); i++) {
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
var header = document.getElementById("noticeme");
var rules = document.getElementById("Rules");
var load = document.getElementById("Load");
var game = document.getElementById("Game");
var gameover = document.getElementById("GameOver")

var button = document.getElementsByClassName("ball");
var score = document.getElementById("score");
var pupil = document.getElementById("pupil");
var pupil_poss = pupil.getBoundingClientRect(); //Retrive the position of pupil
console.log("Left position: " + pupil_poss.left)
console.log("peramiter: " + (pupil_poss.left - 100) + "|" + (pupil_poss.left + 100))


var maxscore = document.getElementById("maxscore")
var highscore = document.getElementById("highscore")
var time = document.getElementById("time")
var timetext = document.getElementById("SurvivedTime")

var ww = window.innerWidth - 250;
var wwc = 0;
var wh = window.innerHeight - 250;
var whc = 0;
/////////////////////////////////////////////////////////////////////////////////////////////(Preset conditions)
load.style.display = "none";
game.style.display = "none"; //Make load, game and game over invicible
gameover.style.display = "none";

var collors = ["blank", "red", "green", "blue"]; //load in availabla collors
var curentcollor = "blank"; //first collor has to be defined as id
var iris = document.getElementById(curentcollor); //get first collor id

var points = 0; //initial points and score
score.innerHTML = points;
var record = 0;

var Left = 0; //Initial time(will be 10 seconds when started)
var SubMiss = 0; //Subtract for missclick
var survived = 0; //time survived

////////////////////////////////////////////////////////////////////////////////////////////////////(Functions)
function switchcollor(collors, iris, curentcollor) //Switch collor
{
  let col = 0;
  while (col == 0) //Peramiter so collor does not become "blank"
  {
    col = Math.floor(Math.random() * 4);//generate random number for collor
  }
  iris.id = (collors[col]); //retrieve the collor from collors arrayand present it in the iris
  console.log("collor selected: " + iris.id)
  curentcollor = collors[col];
  return(curentcollor);
  
}
function siwtchpupil()//Switch pupil between O(click) and X(don't click)
{
  pup = Math.floor(Math.random() * 3); //randomly generate  number for pupil
  console.log("pupil number" + pup) //control
  if(pup == 2)
  {
    pupil.classList.remove('Pupil1'); //if roll a 2 or 0, change to the X pupil
    pupil.classList.add('Pupil2');
    console.log("switched to Pupil2");
  }
  else
  {
    pupil.classList.remove('Pupil2'); //do the opisit if roll a 1
    pupil.classList.add('Pupil1');
    console.log("switched to Pupil1")
  }
}
function switchposs() //generate coordinates for buttons
{
  for(var i = 0; i < button.length; i++) //For every button
  {
    while((wwc <= pupil_poss.left - 100 ^ wwc >= pupil_poss.left + 100) && wwc <= 0)//Left possition(Falesafe, if style.left < 0, the element will disepear)
      {
        wwc = Math.floor(Math.random() * ww - 100);
        console.log("Button col:" + collors[i + 1] + "|Possition: " + wwc)
      }
      wwc = wwc + 'px';
      button[i].style.left = wwc;
      wwc = 0
    while(whc <= pupil_poss.left - 50 ^ whc >= pupil_poss.left + 50)
    {
      whc = Math.floor(Math.random() * wh - 400) ; //Height
      whc = whc + 'px'; 
    }
      button[i].style.top = whc;
      whc = 0
  }
}
//######################################################################################################
function waitforme(ms) //Delay function for "for" loops
{
  return new Promise( resolve => 
    {
      setTimeout(()=> {resolve('')},ms );
    })
}
async function page(eye)//Switch page
{
  for(var i = 0; i < eye.length - 1; i++) //For every item in list eye
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
  curentcollor = switchcollor(collors, iris, curentcollor); //switch collor from blank
  console.log("SELECTED " + curentcollor)

  points = 0;
  score.innerHTML = points;

  Left = 30; //the time left(30 seconds)
  survived = 0;
  time.innerHTML = Left 
  interval = window.setInterval(function(){count()}, 1000); //set timeout intervalt for count

}
function Click(button, i) //Click function- for buttons(Can't "onclick" directly in for loop(https://www.youtube.com/watch?v=aZbgE3yhC2o&t=342s))
  {
    button[i].onclick = function() //Add on click function for the n:th button
    {
      switchposs(); //switch positions
      
      console.log(button[i].id);
      if((button[i].id == curentcollor & pupil.className == "Pupil1") ^ (button[i].id != curentcollor & pupil.className == "Pupil2"))
      //if you click the same collor with regular pupil, or click difrent collor with X pupil.
      {
        points++;
        score.innerHTML = points; //If click on the corect collor, add a point
      }
      else
      {
        SubMiss++;
        Left = Left - SubMiss; //If misclick, left will decrease linearly
      }
      curentcollor = switchcollor(collors, iris, curentcollor); //switch collors and log the corect one
      siwtchpupil()
      
      console.log("corect collor: " + curentcollor);
    }
  }
function count() //timer
{
  Left-- //subtract time
  time.innerHTML = Left //display the time left
  survived++
  if(Left <= 0) //once the time runs out...
  {
    game.style.display = "none" //...End game and load gane over
    gameover.style.display = "block";
    eye[4].style.display = "flex" //display GameOver eye
    SubMiss = 0

    maxscore.innerHTML = points //add colected score, highscore and survived time
    if (record < points)
    {
      record = points
    }
    highscore.innerHTML = record
    timetext.innerHTML = survived

    console.log("reset")
    clearInterval(interval);    
  }
  else
  {
    time.innerHTML = Left
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////(Aplication of functions for classes)
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
    rules.style.display = "none"; //Make only load vissible
    game.style.display = "none"; 
    gameover.style.display = "none";
    load.style.display = "block"
    if(load.style.display == "block") //Once the load is vicible
    {
      page(eye); //Begin page function and start game
    }
  };
};
for(i = 0; i < button.length; i++) //Add on click function for every "ball" button
{ 
  Click(button, i)
}
});


//////////////////////////////////////////////////////////////////////////////////////////////(Experimental functions)
/**/