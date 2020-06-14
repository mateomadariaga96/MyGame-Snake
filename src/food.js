class Food {
	constructor(ctx) {
	  this.ctx = ctx;
	  this.x = 0;
	  this.y = 0;

	  this.foodpic = new Image()
	  this.foodpic.src = "./img/apple.png";
	};

	createFood() { 
		function randomTen(min, max) { 
			return Math.round((Math.random() * (max-min) + min) / 20) * 20;
		};

		this.x = randomTen(0, 480);  
		this.y = randomTen(0, 480);
    };

	draw() {
		this.ctx.drawImage(
			this.foodpic,
			this.x,
			this.y,
			20,
			20
		);
    };  
}