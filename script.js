//MAKE-BUBBLE
function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 107; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

//Timer
var timer = 60;
function runTimer() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<div id="gameOver">
            <h1>GAME OVER</h1>  <h2>Your score is: ${score} <h2/>

            </div>`;
      // document.querySelector("#gameOver").innerHTML = ``
    }
  }, 1000);
}

runTimer();

//GetHit
var hitRn;
function newHit() {
  hitRn = Math.floor(Math.random() * 11);
  document.querySelector("#hit").textContent = hitRn;
}

newHit();

//increaseScore
var score = 0;
function incScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

//EVENT_BUBBLING
document.querySelector("#pbtm").addEventListener("click", (dets) => {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitRn) {
    incScore();
    newHit();
    makeBubble();
  }
});
