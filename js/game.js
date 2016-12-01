// GAME MODULE


function Game() {
	this.elem = null;

	this.gameObjects = [];

	this.speed = 1;

	this.state = null;

}


Game.prototype.init = function(elem) {
	this.elem = elem;

	this.elem.style.width = GAME_FRAME_WIDTH;
	this.elem.style.height = GAME_FRAME_HEIGHT;
};

Game.prototype.addObject = function(gameObject) {
	this.gameObjects.push(gameObject);
}

Game.prototype.removeObject = function(gameObject) {
	this.gameObjects.foreach(function(item, i) {
		if(item == gameObject) {
			this.gameObjects.delete(i);
			return 1;
		}
	});
	return 0;
}

