class Snake {
	constructor(ctx) {
		this.ctx = ctx

		this.snakeArr = [
			{x:240, y:240},
			{x:220, y:240},
			{x:200, y:240},
			{x:180, y:240},
			{x:160, y:240}
		]

		this.dx = 20
		this.dy = 0

		this._setListeners()

	}


	draw() {

		function drawSnakePart(snakePart) {
			ctx.fillStyle = '#ffffff';
		    ctx.strokestyle = '#000000';
			 
			ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
			ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
		  
		}
			this.snakeArr.forEach(drawSnakePart)
	}

	move () {
		
	    
		this.snakeArr.forEach((element) => {
			if (element.x > 500) {
			element.x = 0
			}
			if (element.x < 0) {
				element.x = 500
			}
			if (element.y > 500) {
				element.y = 0
			}
			if (element.y < 0) {
				element.y = 500
			}
				
		})

		const head = {x: this.snakeArr[0].x + this.dx, y: this.snakeArr[0].y + this.dy};
			
		this.snakeArr.unshift(head);	
	}

	_checkIsCollision(element) {
		const colX = this.snakeArr[0].x > (element.x + element.x.width);
		const colY = this.snakeArr[0].y > (element.y + element.y.height);
		return colX && colY;
	}

	_setListeners() {
		document.addEventListener('keydown', event => {
			const goingUp = this.dy === -20;
			const goingDown = this.dy === 20;  
			const goingRight = this.dx === 20;  
			const goingLeft = this.dx === -20;

            switch(event.keyCode) {
                case UP:
					if(!goingDown) {
					this.dy = -20;
					this.dx = 0;	
					}
					break;
				case DOWN:
					if(!goingUp) {
					this.dy = 20;
					this.dx = 0 ;
					}
					break;
				case LEFT:
					if(!goingRight) {
					this.dy = 0;
					this.dx = -20 ;
					}
					break;
				case RIGHT:
					if(!goingLeft) {
					this.dy = 0;
					this.dx = 20;
					break;
					}
            }
        })
	}
	
}