const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreZero = "0";
const score = document.getElementById("score");
const start = document.getElementById("start-button");
const instruction = document.getElementById("how-button");

window.onload = () => {
	const preStart = new Image ()
	preStart.src = "./img/prestart.png";
	const preMusic = new Audio()
	preMusic.src = "./sounds/prestart-music.mp3";
    preStart.onload = () => {
		ctx.drawImage(preStart, 0, 0, 500, 500);
		preMusic.play();
	};

	score.style.display = "none";

	//how to play button
	const howToPlay = new Image ()
	howToPlay.src = "./img/instructions1.png";
	instruction.onclick = () => {
		if (instruction.innerHTML === "How to play"){
		ctx.clearRect(0, 0, 500, 500);
		ctx.drawImage(howToPlay, 0, 0, 500, 500);
		instruction.style.display = "none";
		};

		//Restart Button with innerHTML change
		if (instruction.innerHTML === "Restart Game"){
			startGame();
			score.style.display = "flex";
		    start.innerHTML = "Pause Game";
			instruction.style.display = "none";
			start.style.display = "flex";
			document.getElementById("score-num").innerHTML = scoreZero;
			canvas.style.borderColor = "rgb(3, 170, 58)";
		};
	};

	//Start Game Button
	start.onclick = () => {
		startGame();
		score.style.display = "flex";
		start.innerHTML = "Pause Game";
		instruction.style.display = "none";
		preMusic.pause();
	};
	
	function startGame() {
		const newGame = new Game(ctx)
		newGame.start();
		
		start.onclick = () => {
			newGame.pause();
			start.onclick = () => {
				newGame.resume();
			};
		};
	};
};

