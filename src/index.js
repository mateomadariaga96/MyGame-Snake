const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

window.onload = () => {
	//pre start image
	const preStart = new Image ();
	preStart.src = "./img/prestart.png"
    preStart.onload = () => {
		ctx.drawImage(preStart, 0, 0, 500, 500);
	}

	//how to play button (creating image)
	/*const instructions = new Image ();
	instructions.scr = ""
	document.getElementById('how-button').onclick = () => {
		ctx.drawImage(instructions, 0, 0, 500, 500);
	};*/

	//start game button
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
	
	  function startGame() {
		const newGame = new Game(ctx)
		newGame.start()
	}
};

