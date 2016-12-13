// PLAYER MODULE
const PLAYER_COMMON_RUN = 'img/player/common_run.png';
const PLAYER_LEFT_RUN = 'img/player/left_run.png';
const PLAYER_RIGHT_RUN = 'img/player/right_run.png';


function Player() {
	console.log(resources.get(PLAYER_COMMON_RUN).width);
	this.road = 0;
}

Player.prototype = Object.create(GameObject.prototype);
