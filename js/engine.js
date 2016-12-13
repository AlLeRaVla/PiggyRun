// ENGINE

function Engine(game) { 
	this.game = game;

	console.log("engine");
	
}

Engine.prototype.keyHandler = function(e) {
	console.log(e.keyCode);
};