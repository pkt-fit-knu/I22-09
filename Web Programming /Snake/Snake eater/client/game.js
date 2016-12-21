function Game(){
	this.cellSize = 16;
	this.canvasWidth = 256;
	this.canvasHeight = 256;
	this.backgroundColor = '#000';
	this.snakeColor = '#789';
	this.snakeHeadColor = '#aa0000';
	this.score = 0;
	this.status = 1;
	this.STATUS = {
		PLAY: 0,
		NONE: 1,
		GAMEOVER: 2,
		GAMEWIN: 3,
		PAUSE: 4
	} ;
 //centering
 
 document.body.style.textAlign = 'center';
 
 //create canvas
 
 this.canvas = document.createElement('canvas');
 this.canvas.width = this.canvasWidth;
 this.canvas.height = this.canvasHeight;
 this.canvas.style.border = '1px solid #444';
 
 //context
 
 this.context = this.canvas.getContext('2d');
 
 //scene
 
 this.sceneWidth = Math.ceil(this.canvasWidth / this.cellSize);
 this.sceneHeight = Math.ceil(this.canvasHeight / this.cellSize);
 
 //load snake
 
 this.snake = new Snake(this);
 
 //load apple

this.apple = new Apple(this);
	
}

Game.prototype.init = function(){
	this.reset();	
}

Game.prototype.update = function(){
	if (this.getStatus() == this.STATUS.PLAY){
		this.snake.update();
	}
	input.isLock = false;
}

Game.prototype.rest = function() {
	this.snake = new Snake(this);
	this.apple = new Apple(this);
}

