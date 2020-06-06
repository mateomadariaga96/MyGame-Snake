class Food {
	constructor(ctx) {
	  this.ctx = ctx
	  this.foodX = 0
	  this.foodY = 0
	  
	  this.snake = new Snake(ctx);
	}

	randomTen(min, max) { 
		return Math.round((Math.random() * (500-0) + 0) / 10) * 10;
	}

	createFood() { 
		this.foodX = randomTen(0, this.ctx.width - 10);  
		this.foodY = randomTen(0, this.ctx.height - 10);
  
	    this.snake.forEach(function isFoodOnSnake(part) {
		const foodIsOnSnake = part.x == this.foodX && part.y == this.foodY
		if (foodIsOnSnake)
		createFood();
	});
    }

	draw() {
		function drawFood() {
		ctx.fillStyle = 'red';
		ctx.strokestyle = 'darkred'; 
		ctx.fillRect(this.foodX, this.foodY, 10, 10); 
		ctx.strokeRect(this.foodX, this.foodY, 10, 10)
	    }
    }  
}