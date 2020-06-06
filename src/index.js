const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

window.onload = () => {
	const preStart = new Image ();
	preStart.src = "./img/prestart.png"
    preStart.onload = () => {
		ctx.drawImage(preStart, 0, 0, 500, 500);
	}
	
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
	
	  function startGame() {
		const newGame = new Game(ctx)
		newGame.start()
	}
};

