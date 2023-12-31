const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;
const backgroundImage ='mars.jpg'
const roverImage = "rover.png"

let roverX = 10;
let roverY = 10;

function add() {
	const backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // definindo uma função, ao carregar esta variável
	backgroundImgTag.src = backgroundImage;   // carregando a imagem

	const roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadRover; // definindo uma função, ao carregar esta variável
	roverImgTag.src = roverImage;   // carregando a imagem

	function uploadBackground() {
		ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
	}

	function uploadRover() {
		ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
	}


	window.addEventListener("keydown", myKeyDown);

	function myKeyDown(e) {
		let keyPressed=e.keyCode 
		console.log(keyPressed);
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (roverY >= 0) {
			roverY -=10
			uploadBackground();
			uploadRover();
		}
	}
	function down() {
		if (roverY <= 500) {
			roverY +=10
			uploadBackground();
			uploadRover();
		}
	}
	function left() {
		if (roverX >= 0) {
			roverX -=10
			uploadBackground();
			uploadRover();
		}
	}
	function right() {
		if (roverX <= 700) {
			roverX +=10
			uploadBackground();
			uploadRover();
		}
	}
}