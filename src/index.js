const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreZero = "0";

window.onload = () => {
	//pre start image
	const preStart = new Image ();
	preStart.src = "./img/prestart.png";
	const preMusic = new Audio()
	preMusic.src = "./sounds/prestart-music.mp3"
    preStart.onload = () => {
		ctx.drawImage(preStart, 0, 0, 500, 500);
		preMusic.play();
	}

	document.getElementById("score").style.display = "none";

	//how to play button (creating image)
	const howToPlay = new Image ();
	howToPlay.src = "./img/instructions.png"
	document.getElementById("how-button").onclick = () => {
		if (document.getElementById("how-button").innerHTML === "How to play"){
		ctx.clearRect(0, 0, 500, 500)
		ctx.drawImage(howToPlay, 0, 0, 500, 500);
		}

		//Restart Button with innerHTML change
		if (document.getElementById("how-button").innerHTML === "Restart Game"){
			startGame();
			document.getElementById("score").style.display = "flex";
		    document.getElementById("start-button").innerHTML = "Pause Game";
			document.getElementById("how-button").style.display = "none";
			document.getElementById("start-button").style.display = "flex";
			document.getElementById("score-num").innerHTML = scoreZero;
			document.getElementById("canvas").style.borderColor = "rgb(44, 42, 42)";

		}
	};

	//start game button
	document.getElementById("start-button").onclick = () => {
		startGame();
		document.getElementById("score").style.display = "flex";
		document.getElementById("start-button").innerHTML = "Pause Game";
		document.getElementById("how-button").style.display = "none";
		preMusic.pause();
	}
	
	function startGame() {
		const newGame = new Game(ctx)
		newGame.start();
		
		document.getElementById("start-button").onclick = () => {
			newGame.pause();
			document.getElementById("start-button").onclick = () => {
				newGame.resume();
			}
		}
	}
};

