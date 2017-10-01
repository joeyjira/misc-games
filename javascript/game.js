const startButton = document.querySelector('.start')
const resetButton = document.querySelector('.reset')
const arrow = document.querySelector(".arrow-face");
const points = document.querySelector(".points");
const timer = document.querySelector(".timer");
const highscore = document.querySelector(".highscore");
const correct = document.querySelector(".correct")
const wrong = document.querySelector(".wrong")
let x;
let high = 0;
startButton.addEventListener('click', function() {
    startButton.style.display = "none";
    resetButton.style.display = "flex";
    arrowGame();
})

resetButton.addEventListener('click', function(){
    arrow.style.display = "none";
    points.style.display = "none";
    timer.style.display = "none";
    highscore.style.display = "none";
    clearInterval(x);
    arrowGame();
});