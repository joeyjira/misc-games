function arrowGame() {
  const arrows = ["&larr;", "&uarr;", "&rarr;", "&darr;"];
  let time = 20;
  let count = 0;
  timer.innerHTML = `Time: ${time}`;

  function gameTimer() {
    x = setInterval(function() {
      time--;
      timer.innerHTML = `Time: ${time}`;

      if (time === 0) {
        clearInterval(x);
        arrow.style.display = "none";
        points.style.display = "none";
        timer.style.display = "none";
        if (count > high) {
          high = count;
        }
        highscore.innerHTML = `SCORE: ${count} </br> HIGHSCORE: ${high}`;
        highscore.style.display = "flex";
      }
    }, 1000);
  }

  arrow.style.display = "flex";
  points.style.display = "flex";
  timer.style.display = "flex";
  
  points.innerHTML = `Points: ${count}`;

  function setArrow() {
    const randNum = Math.floor(Math.random() * 4);
    arrow.innerHTML = arrows[randNum];
    arrow.classList.remove("correct");
    arrow.classList.remove("wrong");
  }

  window.addEventListener("keydown", e => {
    let inputKey = document.createElement("div");
    switch (e.keyCode) {
      case 37:
        inputKey.innerHTML = "&larr;";
        break;
      case 38:
        inputKey.innerHTML = "&uarr;";
        break;
      case 39:
        inputKey.innerHTML = "&rarr;";
        break;
      case 40:
        inputKey.innerHTML = "&darr;";
        break;
    }
    if (inputKey.innerHTML === arrow.innerHTML) {
      arrow.classList.add("correct");
      correct.currentTime = 0;
      correct.play();
      count++;
      points.innerHTML = `Points: ${count}`;
      setTimeout(setArrow, 150);
    } else {
      arrow.classList.add("wrong");
      wrong.currentTime = 0;
      wrong.play();
      if (count > 0) {
        count--;
      }
      points.innerHTML = `Points: ${count}`;
      setTimeout(setArrow, 150);
    }
  });

  setArrow();
  gameTimer();
}
