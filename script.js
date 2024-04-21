let firstPlayerScore = Number(localStorage.getItem('firstPlayerScore')) || 0;
let secondPlayerScore = Number(localStorage.getItem('secondPlayerScore')) || 0;

// Update the score display when the page loads
window.onload = function() {
  document.getElementById('firstPlayerScore').textContent = firstPlayerScore;
  document.getElementById('secondPlayerScore').textContent = secondPlayerScore;
};

function updateScore(player) {
  if (player === 'firstPlayer') {
    firstPlayerScore++;
    localStorage.setItem('firstPlayerScore', firstPlayerScore);
    document.getElementById('firstPlayerScore').textContent = firstPlayerScore;
  } else if (player === 'secondPlayer') {
    secondPlayerScore++;
    localStorage.setItem('secondPlayerScore', secondPlayerScore);
    document.getElementById('secondPlayerScore').textContent = secondPlayerScore;
  }
}

/************************************************************/

function updateScore() {
  if (check(firstPlayer)) {
    firstPlayerScore++;
  } else if (check(secondPlayer)) {
    secondPlayerScore++;
  }
}

// Call updateScore after each move
// updateScore();

/************************************************************/

function updateScore(player) {
  if (player === 'firstPlayer') {
    firstPlayerScore++;
    document.getElementById('firstPlayerScore').textContent = firstPlayerScore;
  } else if (player === 'secondPlayer') {
    secondPlayerScore++;
    document.getElementById('secondPlayerScore').textContent = secondPlayerScore;
  }
}

// Call updateScore in your winnerpleyr function
function winnerpleyr(p){
  // rest of your code
  if (p === "Congrats player one you win") {
    updateScore('firstPlayer');
  } else {
    updateScore('secondPlayer');
  }
}
/************************************************************/
const cards = Array.from(document.querySelectorAll(".card"));
const winner = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],
[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
let firstPlayer = [], secondPlayer = [], count = 0;
function check(array){
  let finalResult = false;
  for(let item of winner){
    let res = item.every(val => array.indexOf(val) !== -1);
    if(res){
      finalResult = true;
      break;
    }
  }
  return finalResult;
}
/*******************************************************/
function winnerpleyr(p){
  const modal = document.createElement("div");
  const player = document.createTextNode(p);
  const replay = document.createElement("button");
  modal.classList.add("winner");
  modal.appendChild(player);
  replay.appendChild(document.createTextNode("Replay"));
  replay.onclick = function() { rep() };
  modal.appendChild(replay);
  document.body.appendChild(modal);

  // Update score
  if (p.includes("player one")) {
    updateScore('firstPlayer');
  } else if (p.includes("player two")) {
    updateScore('secondPlayer');
  }
}
/*******************************************************/
function draw(){
  if(this.classList == "card"){
    count++;
    if(count%2 !== 0){
      this.classList.add("x");
      firstPlayer.push(Number(this.dataset.index));
      if(check(firstPlayer)){        
        winnerpleyr("Congrats player one you win");
      }
    } else{
      this.classList.add("o");
      secondPlayer.push(Number(this.dataset.index));
      if(check(secondPlayer)){
        winnerpleyr("Congrats player two you win");
      }
    }
    if(count === 9){
      winnerpleyr("Draw");
    }
  }
}
function rep(){
  const w = document.querySelector(".winner");
  firstPlayer = [];
  secondPlayer = [];
  count = 0;
  w.remove();

  // Remove X's and O's from the game board
  cards.forEach(card => card.classList = "card");

  // Update the score display without resetting the scores
  document.getElementById('firstPlayerScore').textContent = firstPlayerScore;
  document.getElementById('secondPlayerScore').textContent = secondPlayerScore;
}

cards.forEach(card => card.addEventListener("click", draw)); 
/*******************************************************/

document.getElementById('darkModeSwitch').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});