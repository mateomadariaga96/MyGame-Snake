class Food {
	constructor(ctx) {
	  this.ctx = ctx
	  this.foodX = 0
	  this.foodY = 0
	}

	createFood() { 
		function randomTen(min, max) { 
			return Math.round((Math.random() * (max-min) + min) / 10) * 10;
		}

		this.foodX = randomTen(0, 490);  
		this.foodY = randomTen(0, 490);
    }

	draw() {
		ctx.fillStyle = 'red';
		ctx.strokestyle = 'darkred'; 
		ctx.fillRect(this.foodX, this.foodY, 10, 10); 
		ctx.strokeRect(this.foodX, this.foodY, 10, 10);
    }  
}