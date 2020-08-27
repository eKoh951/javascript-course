/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gamePlaying, lastDice, pointsToWin = 20;

init();

function btn() {
	
}

document.querySelector( '.btn-roll' ).addEventListener( 'click', function() {
	
	
	if( gamePlaying ) {
		// 1. Random number
		var dice1 = Math.floor( Math.random() * 6 ) + 1;
		var dice2 = Math.floor( Math.random() * 6 ) + 1;
		
		// 2. Display the result
		document.getElementById( 'dice-1' ).style.display = 'block';
		document.getElementById( 'dice-2' ).style.display = 'block';
		document.getElementById( 'dice-1' ).src = 'dice-' + dice1 + '.png';
		document.getElementById( 'dice-2' ).src = 'dice-' + dice2 + '.png';
		
		// if( dice === 6 && lastDice == 6 ) {
		// 	lastDice = 0;
		// 	scores[activePlayer] = 0;
		// 	document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
		// 	nextPlayer();
		// } else if ( dice !== 1 ) {
		// 	// Add score
		// 	roundScore += dice;
		// 	document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
		// 	lastDice = dice;
		// } else {
		// 	nextPlayer();
		// }

		if( dice1 !== 1 && dice2 !== 1 ) {
			var dice = dice1 + dice2;
			roundScore += dice;
			document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}


} );

document.querySelector( '.btn-hold' ).addEventListener( 'click', function() {
	
	if( gamePlaying ) {

		// Add current score to global score
		scores[activePlayer] += roundScore;
		
		//Update the UI
		document.querySelector( '#score-' + activePlayer ).textContent = scores[activePlayer];
		
		// Check if Player won the game
		var inputScore = parseInt( document.querySelector( 'input' ).value );
		
		if( inputScore !== NaN ){
			pointsToWin = inputScore;
		}

		if( scores[activePlayer] >= pointsToWin ) {
			document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
			document.getElementById( 'dice-1' ).style.display = 'none';
			document.getElementById( 'dice-2' ).style.display = 'none';
			document.querySelector( '.player-' + activePlayer + '-panel' ).classList.add('winner');
			document.querySelector( '.player-' + activePlayer + '-panel' ).classList.remove('active');
			gamePlaying = false;
		} else {
			// Toggle active player
			nextPlayer();
		}
	}

});

function nextPlayer() {
		// Next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		// Set score back to 0
		roundScore = 0;
		document.getElementById( 'current-0' ).textContent = '0';
		document.getElementById( 'current-1' ).textContent = '0';
		
		document.querySelector( '.player-0-panel' ).classList.toggle( 'active' );
		document.querySelector( '.player-1-panel' ).classList.toggle( 'active' );

		// document.querySelector( '.player-0-panel' ).classList.remove( 'active' );
		// document.querySelector( '.player-1-panel' ).classList.add( 'active' );
		// document.getElementById( 'dice-1' ).style.display = 'none';
		// document.getElementById( 'dice-2' ).style.display = 'none';
}

document.querySelector( '.btn-new' ).addEventListener( 'click', init );

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.getElementById( 'dice-1' ).style.display = 'none';
	document.getElementById( 'dice-2' ).style.display = 'none';
// getElementById is a bit faster than querySelector
	document.getElementById( 'score-0' ).textContent = '0';
	document.getElementById( 'score-1' ).textContent = '0';
	document.getElementById( 'current-0' ).textContent = '0';
	document.getElementById( 'current-1' ).textContent = '0';
	document.getElementById( 'name-0' ).textContent = 'Player 1';
	document.getElementById( 'name-1' ).textContent = 'Player 2';
	document.querySelector( '.player-0-panel' ).classList.remove('winner');
	document.querySelector( '.player-1-panel' ).classList.remove('winner');
	document.querySelector( '.player-0-panel' ).classList.remove('active');
	document.querySelector( '.player-1-panel' ).classList.remove('active');
	document.querySelector( '.player-0-panel' ).classList.add('active');
}

// 1. A player losses his score if he hits two 6 in a row then the other player plays

// 2. Add input for the predefined winning score so players can change it

// 3. Add a 2nd dice, the player will loose his score if any of the dices hits 1

// document.querySelector( '#current-' + activePlayer ).textContent = dice;
// document.querySelector( '#current-' + activePlayer ).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector( '#score-0' ).textContent;
