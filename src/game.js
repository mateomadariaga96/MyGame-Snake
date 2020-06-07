class Game {
	constructor(ctx) {
	  this.ctx = ctx;
	  
	  this.intervalId = null;
	  this.tick = 0
  
	  this.bg = new Background(ctx);
	  this.snake = new Snake(ctx);
	  this.fd = new Food(ctx);
	}

	start() {
		this.fd.createFood()
		this.intervalId =  setInterval(() => {
			this._clear()
			this._draw()
			this._move()
			this._addFood()
			this._checkFoodCollisions()
			this._checkSnakeCollisions()
			this.tick++
			if (this.tick >= 10000) {
				this.tick = 0
			}
		},  1000 / 10);
	}

	_clear() {
		this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height)
	}

	_draw() {
		this.bg.draw()
		this.snake.draw()
		this.fd.draw()
	}

	_move() {
		this.snake.move()
	}

	_addFood() {
		this.snake.snakeArr.forEach( (part) => {
			if (this.fd.x === part.x && this.fd.y === part.y) {
                this.fd.createFood();
            }
        })	
	}

	_checkFoodCollisions() {
		const didEatFood = this.snake.snakeArr[0].x === this.fd.x && 
		this.snake.snakeArr[0].y === this.fd.y;  
		if (didEatFood) {    
			this.fd.createFood();
			this.fd.draw(); 
			console.log("hola")
		} else {    
		this.snake.snakeArr.pop();  
	    }
	}

	_checkSnakeCollisions() {
		for (let i = 4; i < this.snake.snakeArr.length; i++) {
			const didCollide = this.snake.snakeArr[i].x === this.snake.snakeArr[0].x &&     
			this.snake.snakeArr[i].y === this.snake.snakeArr[0].y
			if (didCollide) {
			this._gameOver()
			}
		}
	}

	_gameOver() {
		clearInterval(this.intervalId)
		const gameOver = new Image ();
	    gameOver.src = "./img/prestart.png"
		ctx.drawImage (gameOver, 0, 0, 500, 500);
	}
}


