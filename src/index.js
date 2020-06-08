const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

window.onload = () => {
	//pre start image
	const preStart = new Image ();
	preStart.src = "./img/prestart.png"
    preStart.onload = () => {
		ctx.drawImage(preStart, 0, 0, 500, 500);
	}

	document.getElementById("score").style.display = "none";

	//how to play button (creating image)
	const howToPlay = new Image ();
	howToPlay.src = "./img/instructions.png"
	document.getElementById("how-button").onclick = () => {
		ctx.clearRect(0, 0, 500, 500)
		ctx.drawImage(howToPlay, 0, 0, 500, 500);
	};

	//start game button
	document.getElementById('start-button').onclick = () => {
		startGame();
		document.getElementById("score").style.display = "flex";
		document.getElementById("how-button").style.display = "none";
		document.getElementById("start-button").innerHTML = "Pause Game";

		//restart game if innerHTML = "Restart Game"
		if (document.getElementById("start-button").innerHTML == "Restart Game") {
			document.getElementById("start-button").onclick = () => {
				startGame();
		    }
	    }
	}
	
	function startGame() {
		const newGame = new Game(ctx)
		newGame.start();
		document.getElementById("how-button").style.display = "none";
		document.getElementById("start-button").innerHTML = "Pause Game";
		document.getElementById('start-button').onclick = () => {
			newGame.pause();
			document.getElementById('start-button').onclick = () => {
				newGame.resume();
			}
		}
	}
};

