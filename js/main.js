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

	pushResources(game);
	resources.onReady(createObjects);

}

function createObjects() {

	player = new Player();
	game.init(document.getElementById("game"));	
}

function pushResources(game) {
	resources.load([PLAYER_COMMON_RUN, PLAYER_LEFT_RUN, PLAYER_RIGHT_RUN])
	/*game.addResource(PLAYER_COMMON_RUN);
	game.addResource(PLAYER_LEFT_RUN);
	game.addResource(PLAYER_RIGHT_RUN);*/
}