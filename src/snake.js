class Snake {
	constructor(ctx) {
		this.ctx = ctx

		this.snakeArr = [
			{x:240, y:240},
			{x:220, y:240},
			{x:200, y:240},
			{x:180, y:240},
			{x:160, y:240}
		];

		this.dx = 20;
		this.dy = 0;


		this._setListeners();
	}

	draw() {

		const up = this.dy === -20;
		const down = this.dy === 20;  
		const right = this.dx === 20;  
		const left = this.dx === -20;

		const arraySn = this.snakeArr
		const ctx = this.ctx

		function drawSnakePart(snakePart) {

			
		let headRight = new Image()
		 headRight.src = "./img/head-right.png";
		let headLeft = new Image()
		 headLeft.src = "./img/head-left.png";
		let headUp = new Image()
		 headUp.src = "./img/head-up.png";
		let headDown = new Image()
		 headDown.src = "./img/head-down.png";

		let tail = new Image()
		 tail.src = "./img/tail.png";

		let bodyHorizontal = new Image()
		 bodyHorizontal.src = "./img/body-hor.png";
		let bodyVertical = new Image()
		 bodyVertical.src = "./img/body-ver.png";
			/*ctx.fillStyle = '#ff914d';
		    ctx.strokestyle = '#008037';
			 
			ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
			ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);*/

			const indexPart = arraySn.indexOf(snakePart)
			const head = indexPart === 0;
			const tails = arraySn.length - 1;
			
			switch(indexPart) {
				case 0:
					if (up) {
						ctx.drawImage(
							headUp,
							snakePart.x,
							snakePart.y,
							20,
							20
						);
					} else if (down) {
						ctx.drawImage(
							headDown,
							snakePart.x,
							snakePart.y,
							20,
							20
						);
					} else if (left) {
						ctx.drawImage(
							headLeft,
							snakePart.x,
							snakePart.y,
							20,
							20
						);
					} else if (right) {
						ctx.drawImage(
							headRight,
							snakePart.x,
							snakePart.y,
							20,
							20
						)
					}
				break;

				case tails:
					if (up || down || left || right) {
						ctx.drawImage(
							tail,
							snakePart.x,
							snakePart.y,
							20,
							20
						);
					}
				break;

				default:
					if (up || down) {
						ctx.drawImage(
							bodyVertical,
							snakePart.x,
							snakePart.y,
							20,
							20
						);
					} else if (right || left) {
						ctx.drawImage(
							bodyHorizontal,
							snakePart.x,
							snakePart.y,
							20,
							20
						);
					}
				break;
			};
		}

		arraySn.forEach(drawSnakePart);
	};

	move () {
		this.snakeArr.forEach((element) => {
			if (element.x > 480) {
			    element.x = 0
			};
			if (element.x < 0) {
				element.x = 480
			};
			if (element.y > 480) {
				element.y = 0
			};
			if (element.y < 0) {
				element.y = 480
			};			
		});

		const head = {x: this.snakeArr[0].x + this.dx, y: this.snakeArr[0].y + this.dy};
			
		this.snakeArr.unshift(head);	
	};

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
					};
					break;
				case DOWN:
					if(!goingUp) {
					this.dy = 20;
					this.dx = 0 ;
					};
					break;
				case LEFT:
					if(!goingRight) {
					this.dy = 0;
					this.dx = -20 ;
					};
					break;
				case RIGHT:
					if(!goingLeft) {
					this.dy = 0;
					this.dx = 20;
					break;
					};
            };
        });
	};
	
}