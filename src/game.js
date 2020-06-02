class Game {
	constructor(ctx) {
	  this.ctx = ctx;
	  this.intervalId = null;
	  this.tick = 0
  
	  this.bg = new Background(ctx);
	}

	start() {
		this.intervalId =  setInterval(() => {
		  this._draw()
		}, 1000 / 60);
	}

	_draw() {
		this.bg.draw()
	}
}

