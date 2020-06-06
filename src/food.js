class Food {
	constructor(ctx) {
	  this.ctx = ctx
	  this.x = Math.round((Math.random() * (490-0) + 0) / 10) * 10;
	  this.y = Math.round((Math.random() * (490-0) + 0) / 10) * 10;
	  this.w = 10;
	  this.h = 10;
	  this.snake = new Snake(ctx);
	}
  
	draw() {
		this.ctx.fillStyle = '#FF0000'
	    this.ctx.fillRect(
		 this.x,
		 this.y,
		 this.w,
		 this.h
	  )

	  this.snake.forEach(function isFoodOnSnake(part) {
		const foodIsOnSnake = part.x == foodX && part.y == foodY
		if (foodIsOnSnake)
		draw();
	});
	}

	const didEatFood = this.snakeArr[0].x === foodX && this.snakeArr[0].y === foodY;
		//if (didEatFood) {
			
		//}
}