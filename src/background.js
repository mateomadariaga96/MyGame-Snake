class Background {
	constructor(ctx) {
	  this.ctx = ctx;
	  this.w = this.ctx.canvas.width
	  this.h = this.ctx.canvas.height
	  this.x = 0
	  this.y = 0
  
  
	  this.img = new Image()
	  this.img.src = "../img/snake-board.jpg"
	}
  
	draw() {
	  this.ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.w,
		this.h
	  )
	}
}