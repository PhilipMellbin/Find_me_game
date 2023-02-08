# Find_me_game
This is a game for a school assignment in seconary school, and takes insperation from the Wanted minigame from Mario

In the game, there will be an eye in the middle, and 3 buttons to click on.
The goal is to acumulate as manny points as posible, through clicking the
button with the same collor as the eye's iris.

You get +2 seconds for every corect click, and get -5 seconds for every incorect click.
If i have extra time, i may add more buttons to click, as well as randomixe between iris and X
(when x appears, you have to click on another button than the one with the same collor)

# Log: 23-01-18
For today, I have finnished adding in my progress from another computer, onto the repo.
For the next log, I will try to fix the loading screen so that it loades one page at a time.
But not before adding comments where necesary.
Have a nice day

---Philip Mellbin

# log 23-01-21
For today, I have fixed the functionality of the loading screen and will now work on the style of it.
After the loading screan is compleated, I will work on the main game.
Have a nice day!

---Philip Mellbin

# log 23-01-23

For today, I have continued filing on the load sequence, as well as started progress on game articel.
The plan I have right now is to dedicate 1 weak on game section, half a week on the game over section and use the remaining time to file the game. Like add countdown(Will probably do that today), add X feature(Don't click on the color the X displays), and maby more collors

For the final 3 days of the assignment, I will begin on a documentation document, summarizing all that i've done, as well as future aspirations with the program(if there are anny)

Have a nice day!

--Philip Mellbin

# log 23-01-29

For today, I have finnished the loading sequence, and am curently stugeling with the on click function for the buttons.
First it appered as "Cannot read properties of undefined (reading 'id')". Then i looked deper and found it retrived the last id.
Excuse me if you are confused, i'm not the best at explaining. If you want to go through script.js and help me fix it, 
feel free to do so. Just do it ON YOUR OWN BRANCH and SHOW TO ME BEFORE MERGING.

For the next log, i will hopefully fix the on click function so i can later add the other features.
As for the dates defined on log #23-01-23 , there may be delays.

Have a nice day!

--Philip Mellbin

# log 23-02-04

For today, i have fixed the onclick function for the collored buttons in script.js . Although the problem is fixed, it led to
a new one: it counts points for the specific button press, and not for all buttons pressed. This is because, instead of pasing it through
an onclick function directly, there is a seperate function. Here is the video for the solution(Credit to SoftAuthor): 
https://softauthor.com/javascript-for-loop-click-event-issues-solutions/


There may be a lack of certainty, but i think that this problem will be solved shortly. After that problem is fixed,
i will go on to add random positioning to the buttons, and then have a timer. As for release time, there aren't anny
specific scheduals for development(thanks to the previous problem), but expect a playable version in march.

Have a nice day!

--Philip Mellbin

# log 23-02-06

For today, i have fixed the related to the counting system. The source was that variable points
was defined as a peramitor for function Click, instead of it being recognized as a var.
This bug has however led me to prupose a new feture. 

Instead of it being fixed -5 seconds, there could be an accumelative reduction effect based
on what collor you clicked wrong. So clicking wrong on one collow would result in -1 seconds,
and clicking it again will result in -2 seconds, and so on.

Ore if this is to difricult, i will just add this accumilation across all buttons. So
the more you misclick, the more time you loose(Will probably add).

As for the future log, I will start adding a time function to change time based on wether you
click right or wrong. And then add random placement of the buttons.

Note that the animation on load will be temporarily disabled due to
functionality purpouses. once the main game is complete, the animation might be added back.

Have a nice day!

--Philip Mellbin

# log 23-02-07

For today, i have added a timer to the program, as well as the "miss click accumilation
(second reduction from missclicks accumilates). Adding this feature was easyer than expected,
only taking this day.

For the next log, i will work on game over page. Display score, highscore, and survived time.
It say "game over" over an eye with blank iris, followed by score, highscore and survived time,
and a start button. It will take some time, but concidering how quickly the timer went,
expect the same date of release.

Have a nice day!

--Philip Mellbin