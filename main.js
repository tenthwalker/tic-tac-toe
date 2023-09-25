// Query Selectors
var display = document.querySelector("#messageBoard");
var buttons = document.querySelectorAll("button");
var player2Win = document.querySelector("#p2");
var player1Win = document.querySelector("#p1");

// Event Listeners
window.addEventListener("load", createPlayer(1, "&#129384", 0), createPlayer(2, "&#128031", 0));

// Event Handlers
var playerStart = 1;
var buttonsArray = Array.from(buttons);
var currentTurn = 1;
var buttonsClicked1 = [];
var buttonsClicked2 = [];
var players = [];
var winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
];

// function to create objects to store player info (id, token, wins)
function createPlayer(id, token, wins) {
  var player = {
    id: id,
    token: token,
    wins: wins
  }
  players.push(player);
}
var player1 = players[0];
var player2 = players[1];
// function increaseWins to increase the count of either player's wins
function increaseWins(player) {
  player.wins += 1;
  if (player.id == 1) {
    player1Win.innerHTML = player.wins;
  } else if (player.id == 2) {
    player2Win.innerHTML = player.wins;
  }
}

// function to keep track of the data for the game board
// if conditional to check if button has been clicked (event.target?)
// if already clicked, do nothing, if not, update innerHTML of button to players[i].token depending on player's turn and call turnTracker()
// push clicked buttons to either buttonsClicked1 or 2 depending on players[i] turn

// function to keep track of player's turns (whose turn is it)
function turnTracker() {
// if playerStart is odd, player 1 starts, if even, player 2 
// check for playerStart remainder to determine even or odd
// update currentTurn variable
display.innerHTML = ``;
}

// function to check game board for win conditions
function win() {
// loop through winCombos, check for match to buttonsClicked1 or 2
for (var i = 0; i < winCombos.length; i++) {
  if (buttonsClicked1.contains(winCombos[i])) {
    display.innerHTML = `${player1.token} won!`;
    increaseWins(player1);
  }
  if (buttonsClicked2.contains(winCombos[i])) {
    display.innerHTML = `${player2.token} won!`;
    increaseWins(player2);
  }
}
reset();
}

// function to detect that the game is a draw (no win conditions met)
function draw() {
display.innerHTML = "It's a draw!"
reset()
}

// function to reset the game board and data to begin a new game

function reset() {
setTimeout(reset, 3 * 1000);
display.innerHTML = "";
playerStart += 1;
buttonsClicked1 = [];
buttonsClicked2 = [];
}