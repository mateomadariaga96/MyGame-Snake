class Snake {
	constructor(ctx) {
		this.ctx = ctx

		this.snakeArr = [
			{x:250, y:250},
			{x:240, y:250},
			{x:230, y:250},
			{x:220, y:250},
			{x:210, y:250}
		]

		this.x = 10
		this.y = 0

		this.dx = 0
		this.dy = 0

		this._setListeners()

	}


	draw() {

		function drawSnakePart(snakePart) {
			ctx.fillStyle = '#ffffff';
		    ctx.strokestyle = '#000000';
			 
			ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
			ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
		  
		}
			this.snakeArr.forEach(drawSnakePart)
	}

	move () {
		const head = {x: this.snakeArr[0].x + this.x, y: this.snakeArr[0].y};
		this.snakeArr.unshift(head);
		this.snakeArr.pop();
	}

	_setListeners() {
		document.addEventListener('keydown', event => {
			const goingUp = this.dy === -10;
			const goingDown = this.dy === 10;  
			const goingRight = this.dx === 10;  
			const goingLeft = this.dx === -10;
			console.log("hola", event.keyCode);
            switch(event.keyCode) {
                case UP:
					if(!goingDown) {
						this.dy = -10;
						this.dx = 0 ;
					}
					
					break;
				case DOWN:
					if(!goingUp)
					this.dy = 10;
					this.dx = 0 ;
					break;
				case LEFT:
					if(!goingRight)
					this.dy = 0;
					this.dx = -10 ;
					break;
				case RIGHT:
					if(!goingLeft)
					this.dy = 0;
					this.dx = 10;
					break;
            }
        })
	}
	
}