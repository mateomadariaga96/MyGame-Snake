class Game {
	constructor(ctx) {
	  this.ctx = ctx;
	  
	  this.intervalId = null;
  
	  this.bg = new Background(ctx);
	  this.snake = new Snake(ctx);
	  this.fd = new Food(ctx);
	  this.superfd = new superFood(ctx);
	  this.obs = new Obstacle(ctx);

	  this.score = 0;

	  this.eatSound = new Audio()
	  this.eatSound.src = "./sounds/eat.wav";
	  this.lostSound = new Audio()
	  this.lostSound.src = "./sounds/endGame.wav";
	  this.specialSound = new Audio()
	  this.specialSound.src = "./sounds/special-sound.mp3";
	  this.newLevelSound = new Audio()
	  this.newLevelSound.src = "./sounds/new-level.mp3";
	};

	start() {
		this.fd.createFood();
		this.superfd.createSuperFood();
		this.obs.createObstacle();
		this.intervalId =  setInterval(() => {
			this._clear();
			this._draw();
			this._move();
			this._checkFoodCollisions();
			this._addFood();
			if (this.score > 0 && this.score % 100 === 0) {
			this._checkSuperFoodCollisions();
			};
			this._addSuperFood();
			if (this.score > 0 && this.score % 50 === 0) {
			this._checkObsCollisions();
			};
			this._addObstacle();
			this._checkSnakeCollisions();
			this._checkWallCollisions();
		},  1000 / 10);	
	};

	pause() {
		clearInterval(this.intervalId);
		document.getElementById("start-button").innerHTML = "Resume Game";
	};

	resume() {
		document.getElementById("how-button").style.display = "none";
		document.getElementById("start-button").innerHTML = "Pause Game";
		document.getElementById('start-button').onclick = () => {
			this.pause();
			document.getElementById('start-button').onclick = () => {
				this.resume();
			};
		};
		this.intervalId =  setInterval(() => {
			this._clear();
			this._draw();
			this._move();
			this._checkFoodCollisions();
			this._addFood();
			if (this.score > 0 && this.score % 100 === 0) {
			this._checkSuperFoodCollisions();
			};
			this._addSuperFood();
			if (this.score > 0 && this.score % 50 === 0) {
			this._checkObsCollisions();
			};
			this._addObstacle();
			this._checkSnakeCollisions();
			this._checkWallCollisions();
		},  1000 / 10);
	};

	_clear() {
		this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
	};

	_draw() {
		this.bg.draw();
		this.snake.draw();
	    this.fd.draw();
		if (this.score >= 50 && this.score % 50 === 0) {
			this.obs.draw();
		};
		if (this.score >= 100 && this.score % 100 === 0) {
			this.superfd.draw();
		};
	};

	_move() {
		this.snake.move();
		if (this.score >=100 && this.score % 100 === 0) {
		this.superfd.move();
		};	
	};

	_addFood() {
		this.snake.snakeArr.forEach( (part) => {
			if (this.fd.x === part.x && this.fd.y === part.y) {
				this.fd.createFood();
            };
        });	
	};

	_addSuperFood() {
		this.snake.snakeArr.forEach( (part) => {
			if (this.superfd.x === part.x && this.superfd.y === part.y) {
				this.superfd.createSuperFood();
            }; 
        });
	};

	_addObstacle() {
		this.snake.snakeArr.forEach( (part) => {
			if (this.obs.x === part.x && this.obs.y === part.y) {
				this.obs.createObstacle();
            } ;
        });	
	};

	_checkFoodCollisions() {
		const didEatFood = this.snake.snakeArr[0].x === this.fd.x &&
		this.snake.snakeArr[0].y === this.fd.y;
		if (didEatFood) {    
			this.fd.createFood();
			this._updateScore();
			this.eatSound.play();
		} else {    
		this.snake.snakeArr.pop();  
	    };
	};

	_checkSuperFoodCollisions() {
		const didEatSuperFood = this.superfd && this.snake.snakeArr[0].x === this.superfd.x &&
		this.snake.snakeArr[0].y === this.superfd.y;
		if (didEatSuperFood) {    
			this.superfd.createSuperFood();
			this._updateScoreSpecial();
			this.specialSound.play();
		};
		this.snake.snakeArr.forEach( (part) => {
			if (this.superfd.x === part.x && this.superfd.y === part.y) {
				this.superfd.createSuperFood();
            };
        });
	};

	_checkObsCollisions() {
		const didGetEaten = this.snake.snakeArr[0].x === this.obs.x &&
		this.snake.snakeArr[0].y === this.obs.y;
		if (didGetEaten) {   
			this._gameOver();
		}; 
	};

	_checkSnakeCollisions() {
		for (let i = 4; i < this.snake.snakeArr.length; i++) {
			const didCollide = this.snake.snakeArr[i].x === this.snake.snakeArr[0].x &&     
			this.snake.snakeArr[i].y === this.snake.snakeArr[0].y;
			if (didCollide) {
			this._gameOver();
			};
		};
	};

	_checkWallCollisions() {
		if (this.score === 100) {
			this.newLevelSound.play();
		};
		if (this.score >= 100) {
			document.getElementById("canvas").style.borderColor = "red";
		};
		if(this.score >= 100) {
		  if (this.snake.snakeArr[0].x >= 500) {
			this._gameOver();
		  };
		  if (this.snake.snakeArr[0].y >= 500) {
			this._gameOver();
		  };
		  if (this.snake.snakeArr[0].x <= 0) {
			this._gameOver();
		  };
		  if (this.snake.snakeArr[0].y <= 0) {
			this._gameOver();
		  };
	    };
	};

	_gameOver() {
		clearInterval(this.intervalId);
		const gameOver = new Image ();
		gameOver.src = "./img/gameover.png";
		gameOver.onload = () => {
			this.ctx.drawImage (gameOver, 0, 0, 500, 500);
		};
		document.getElementById("start-button").style.display = "none";
		document.getElementById("how-button").style.display = "flex";
		document.getElementById("how-button").innerHTML = "Restart Game";
		this.lostSound.play();
	};

	_updateScore() {   
		this.score += 10;    
		document.getElementById("score-num").innerHTML = this.score;   
	};
	
	_updateScoreSpecial() {   
		this.score += 50;    
		document.getElementById("score-num").innerHTML = this.score;   
    };
}
