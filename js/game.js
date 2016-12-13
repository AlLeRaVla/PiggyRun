// GAME MODULE


function Game() {
	this.elem = null;

	this.gameObjects = [];

	this.speed = 1;

	this.state = null;

	this.engine = null;

	this.resources = [];
}



Game.prototype.init = function(elem) {
	this.elem = elem;

	this.elem.style.width = GAME_FRAME_WIDTH;
	this.elem.style.height = GAME_FRAME_HEIGHT;

	this.engine = new Engine(this);

	document.addEventListener('keydown', function(e) {console.log(e.keyCode);} /*this.engine.keyHandler*/);

	//resources.load(this.recources);
};

Game.prototype.addObject = function(gameObject) {
	this.gameObjects.push(gameObject);
}

Game.prototype.removeObject = function(gameObject) {
	this.gameObjects.foreach(function(item, i) {
		if (item == gameObject) {
			this.gameObjects.delete(i);
			return 1;
		}
	});
	return 0;
}

Game.prototype.addResource = function(url) {
	this.resources.push(url);
}