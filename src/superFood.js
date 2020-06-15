class superFood {
	constructor(ctx) {
	  this.ctx = ctx;
	  this.x = 0;
	  this.y = 0;

	  this.vx = 5;

	  this.foodpic = new Image()
	  this.foodpic.src = "./img/chicken.png";
	};

	createSuperFood() { 
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
	
	move() {
		this.x += this.vx;
	
		if (this.x > 480) {
		  this.x = 0;
		};
	};
}