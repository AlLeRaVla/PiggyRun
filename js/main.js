// PIGGY RUN
/*
	|	|	|
	|	|	o
	|	*	|
	|	|	|
	|	|	|
	|	|	|
	|	p 	|
	|	|	|
	0	1	2
*/

var GAME_FRAME_WIDTH = 1000,
	GAME_FRAME_HEIGHT = 600;
var game;



window.onload = function() {
	game = new Game();
	game.init(document.getElementById("game"));
}



