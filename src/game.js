class Game {
	constructor(ctx) {
	  this.ctx = ctx;
	  
	  this.intervalId = null;
  
	  this.bg = new Background(ctx);
	  this.snake = new Snake(ctx);
	  this.fd = new Food(ctx);
	  this.obs = new Obstacle(ctx);

	  this.score = 0;
	}

	start() {
		this.fd.createFood()
		this.obs.createObstacle()
		this.intervalId =  setInterval(() => {
			this._clear()
			this._draw()
			this._move()
			this._checkFoodCollisions()
			//this._checkObsCollisions()
			this._addFood()
			//this._addObstacle()
			this._checkSnakeCollisions()
		},  1000 / 10);
	}

	pause() {
		clearInterval(this.intervalId);
		document.getElementById("start-button").innerHTML = "Resume Game";
	}

	resume() {
		document.getElementById("how-button").style.display = "none";
		document.getElementById("start-button").innerHTML = "Pause Game";
		document.getElementById('start-button').onclick = () => {
			this.pause();
			document.getElementById('start-button').onclick = () => {
				this.resume();
			}
		}
		this.intervalId =  setInterval(() => {
			this._clear()
			this._draw()
			this._move()
			this._checkFoodCollisions()
			this._addFood()
			//this._checkObsCollisions()
			//this._addObstacle()
			this._checkSnakeCollisions()
		},  1000 / 10);
	}

	_clear() {
		this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
	}

	_draw() {
		this.bg.draw();
		this.snake.draw();
		this.fd.draw();
		if (this.score >= 50 && this.score % 50 === 0) {
			this.obs.draw();
		}
	}

	_move() {
		this.snake.move();	
	}

	_addFood() {
		this.snake.snakeArr.forEach( (part) => {
			if (this.fd.x === part.x && this.fd.y === part.y) {
				this.fd.createFood();
            } 
        })	
	}

	/*_addObstacle() {
		this.snake.snakeArr.forEach( (part) => {
			if (this.obs.x === part.x && this.obs.y === part.y) {
				this.obs.createObstacle();
            } 
        })	
	}*/

	_checkFoodCollisions() {
		const didEatFood = this.snake.snakeArr[0].x === this.fd.x &&
		this.snake.snakeArr[0].y === this.fd.y
		if (didEatFood) {    
			this.fd.createFood();
			this._updateScore();
		} else {    
		this.snake.snakeArr.pop();  
	    }
	}

	/*_checkObsCollisions() {
		const didGetEaten = this.snake.snakeArr[0].x === this.obs.x &&
		this.snake.snakeArr[0].y === this.obs.y
		if (didGetEaten) {    
			this._gameOver();
		} 
	}*/

	_checkSnakeCollisions() {
		for (let i = 4; i < this.snake.snakeArr.length; i++) {
			const didCollide = this.snake.snakeArr[i].x === this.snake.snakeArr[0].x &&     
			this.snake.snakeArr[i].y === this.snake.snakeArr[0].y;
			if (didCollide) {
			this._gameOver();
			}
		}
	}

	_gameOver() {
		clearInterval(this.intervalId);
		const gameOver = new Image ();
		gameOver.src = "./img/gameover.png";
		gameOver.onload = () => {
			this.ctx.drawImage (gameOver, 0, 0, 500, 500);
		}
		document.getElementById("start-button").style.display = "none";
		document.getElementById("how-button").style.display = "flex";
		document.getElementById("how-button").innerHTML = "Restart Game";
	}

	_updateScore() {   
		this.score += 10;    
		document.getElementById("score-num").innerHTML = this.score;   
    }
}
