class Obstacle {
	constructor(ctx) {
	  this.ctx = ctx;
	  this.x = 0;
	  this.y = 0;

	  this.w = 20;
      this.h = 20;

	  this.obstacle = new Image()
	  this.obstacle.src = "./img/poopic.png";
	};

	createObstacle() { 
		function randomTen(min, max) { 
			return Math.round((Math.random() * (max-min) + min) / 20) * 20;
		};

		this.x = randomTen(0, 480);  
		this.y = randomTen(0, 480);
    };

	draw() {
		this.ctx.drawImage(
			this.obstacle,
			this.x,
			this.y,
			20,
			20
		);
    }; 
}