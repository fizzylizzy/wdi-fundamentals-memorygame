//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//if (cardOne === cardTwo) {
//	alert("You found a match.");
//}
//if (cardThree === cardFour) {
//	alert("You found a match.");
//}
//if (cardOne !== cardThree) {
//	alert("Sorry, try again.");
//}
var cardsInGeneral = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameboard = document.getElementById("gameboard");

createBoard = function () {
	for (var i = 0; i <cardsInGeneral.length; i=i+1) {
		console.log("Creating a card");
		var card=document.createElement("div");
		card.className="card";
		card.setAttribute('valueOfCard', cardsInGeneral[i]);
		card.addEventListener('click', isTwoCards);
		gameboard.appendChild(card);
	}
}

isMatch = function (arrayOfCards){
	if (arrayOfCards[0]===arrayOfCards[1]) {
		alert("you found a match.");
	}
	else {
		alert("Sorry, try again.");
	}
	for (i = 0; i<2; i = i +1) {
		arrayOfCards[i].innerHTML = "";
	}
}

isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('valueOfCard'));
	if (this.getAttribute('valueOfCard') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
	if (cardsInPlay.length === 2) {
		isMatch (cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();




