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
}

