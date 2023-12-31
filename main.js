// Query Selectors
var display = document.querySelector('#messageBoard');
var buttons = document.querySelectorAll('button');
var player2Win = document.querySelector('#p2');
var player1Win = document.querySelector('#p1');
var buttonsArray = Array.from(buttons);

// Event Listeners
window.addEventListener('load', function() {
  createPlayer(1, '&#129384', 0);
  createPlayer(2, '&#128031', 0);
})
for (var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener('click', function(event) {
    gamePlay(event);
  });
};

// Event Handlers
var newPlayer = {};
var players = [];
var player1;
var player2;
var playerStart = 1;
var currentTurn = 1;
var buttonsClicked1 = [];
var buttonsClicked2 = [];
var remainingChoices = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
var gameState = true;
var winCombos = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['0', '3', '6'],
  ['0', '4', '8'],
  ['2', '4', '6']
];
var currentPlayer;

function createPlayer(number, icon, win) {
  newPlayer = {
    id: number,
    token: icon,
    wins: win
  }
  players.push(newPlayer);
  player1 = players[0];
  player2 = players[1];
  currentPlayer = player1;
  return players;
}

function gamePlay(event) {
  if (event.target.classList.contains('clicked') === false) {
    event.target.classList.add('clicked');
    event.target.innerHTML = `${currentPlayer.token}`;
    for (var i = 0; i < remainingChoices.length; i++) {
      if (remainingChoices[i] == event.target.id) {
        remainingChoices.splice(i, 1);
      }
     }  
    if (currentPlayer === player1) {
      buttonsClicked1.push(event.target.id);
    } else if (currentPlayer === player2) {
      buttonsClicked2.push(event.target.id);
    }
    currentTurn += 1;
    win();
    draw();
    turnTracker();
  } 
}

function turnTracker() {
  if (currentTurn % 2 === 0) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  if (gameState === true) {
    display.innerHTML = `It's ${currentPlayer.token}'s turn!`;
  }
return currentPlayer;
}

function increaseWins() {
  currentPlayer.wins += 1;
  if (currentPlayer.id === 1) {
    player1Win.innerHTML = `wins: ${currentPlayer.wins}`;
  } else if (currentPlayer.id === 2) {
    player2Win.innerHTML = `wins: ${currentPlayer.wins}`;
  }
}

function win() {
  for (var i = 0; i < winCombos.length; i++) {
    if (buttonsClicked1.includes(winCombos[i][0]) && buttonsClicked1.includes(winCombos[i][1]) && buttonsClicked1.includes(winCombos[i][2])) {
      gameState = false;
      display.innerHTML = `${player1.token} won!`;
      increaseWins(player1);
      setTimeout(reset, 3 * 1000);
    }
    if (buttonsClicked2.includes(winCombos[i][0]) && buttonsClicked2.includes(winCombos[i][1]) && buttonsClicked2.includes(winCombos[i][2])) {
      gameState = false;
      display.innerHTML = `${player2.token} won!`;
      increaseWins(player2);
      setTimeout(reset, 3 * 1000);
    }
  }
}

function draw() {
  if ((remainingChoices.length < 1) && (gameState = true)) {
    gameState = false;
    display.innerHTML = "It's a draw!";
    setTimeout(reset, 3 * 1000);
  }
}

function reset() {
playerStart += 1;
currentTurn = playerStart;
for (var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].innerHTML = '';
  buttonsArray[i].classList.remove('clicked');
}
remainingChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
buttonsClicked1 = [];
buttonsClicked2 = [];
gameState = true;
turnTracker();
}