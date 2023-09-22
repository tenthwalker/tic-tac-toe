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
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
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

// function increaseWins to increase the count of either player's wins
function increaseWins(players) {
  for (var i = 0; i < players.length; i++) {
    players[i].wins += 1;
    if (players[i].id == 1) {
      player1Win.innerHTML = players[i].wins;
    } else (players[i].id == 2) {
      player2Win.innerHTML = players[i].wins;
    }
  }
}

// function to keep track of the data for the game board
// if conditional to check if button has been clicked
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
display.innerHTML = `${players[i].token} won!`;
increaseWins();
reset();
}

// function to detect that the game is a draw (no win conditions met)
function draw() {
display.innerHTML = "It's a draw!"
reset()
}

// function to reset the game board and data to begin a new game
// setTimeout() calls reset() * 3000 to wait 3 seconds before resetting
function reset() {
display.innerHTML = "";
playerStart += 1;
buttonsClicked1 = [];
buttonsClicked2 = [];
}