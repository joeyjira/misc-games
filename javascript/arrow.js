function arrowGame() {
  const arrows = ["&larr;", "&uarr;", "&rarr;", "&darr;"];

  const arrow = document.querySelector(".arrow-face");
  const points = document.querySelector(".points");
  const timer = document.querySelector(".timer");
  const highscore = document.querySelector(".highscore");
  let time = 20;
  let high = 0;
  timer.innerHTML = `Time: ${time}`;

  function gameTimer() {
    for (let i = 1; i < 21; i++) {
      setTimeout(function() {
        time--;
        timer.innerHTML = `Time: ${time}`;
        if (i === 20) {
          arrow.style.display = "none";
          points.style.display = "none";
          timer.style.display = "none";
          if (count > high) {
            high = count;
          }
          highscore.innerHTML = `YOUR HIGHSCORE: </br> ${high}`;
          highscore.style.display = "flex";
        }
      }, i * 1000);
    }
  }

  arrow.style.display = "flex";
  let count = 0;
  points.innerHTML = `Points: ${count}`;

  function setArrow() {
    const randNum = Math.floor(Math.random() * 4);
    arrow.innerHTML = arrows[randNum];
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
      count++;
      points.innerHTML = `Points: ${count}`;
      setArrow();
    } else {
      if (count > 0) {
        count--;
      }
      points.innerHTML = `Points: ${count}`;
    }
  });

  setArrow();
  gameTimer();
}
