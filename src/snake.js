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

		this.headRight = new Image()
		this.headRight.src = "./headRight.png";
		this.headLeft = new Image()
		this.headLeft.src = "./headLeft.png";
		this.headUp = new Image()
		this.headUp.src = "./img/headUp.png";
		this.headDown = new Image()
		this.headDown.src = "./img/headDown.png";

		this._setListeners();

	}

	draw() {

		function drawSnakeOrange(snakePart) {
			ctx.fillStyle = '#ff914d';
		    ctx.strokestyle = '#008037';
			 
			ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
			ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
		}

		this.snakeArr.forEach(drawSnakeOrange);

		//Pintar un cuadrado de cada color
		/*function drawSnakeRed(snakePart) {
			ctx.fillStyle = '#ff1616';
			ctx.strokestyle = '#000000';
				 
			ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
			ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
		  
		}

		if (this.snakeArr[i] % 2 === 0) {
			this.snakeArr.forEach(drawSnakeOrange)
		} else {
			this.snakeArr.forEach(drawSnakeRed)
		}*/
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