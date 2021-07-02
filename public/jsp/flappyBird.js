let cvs = document.getElementById("flappyBird");
let ctx = cvs.getContext("2d");
/*----------------------------------------------------*/
let imgBird = new Image();
let imgBg = new Image();
let imgFg = new Image();
let imgPipeTop = new Image();
let imgPipeBottom = new Image();

let imageFolder = "image/games/flappy_bird/";
	imgBird.src = imageFolder + "bird.png";
	imgBg.src = imageFolder + "bg.png";
	imgFg.src = imageFolder + "fg.png";
	imgPipeTop.src = imageFolder + "pipeTop.png";
	imgPipeBottom.src = imageFolder + "pipeBottom.png";
/*----------------------------------------------------*/
let soundBird = new Audio();
let soundScore = new Audio();

let audioFolder = "audio/games/flappy_bird/";
	soundBird.src = audioFolder + "fly.mp3";
	soundScore.src = audioFolder + "score.mp3";
/*----------------------------------------------------*/
let gameOver = true;
let windowHeight = 160;

let birdX = 10;
let birdY = 150;
let birdSpeedY = 2;
let grav = 0.1;

let score = 0;

let pipe = [];
pipe[0] = {
	x : cvs.width,
	y : -100
}

function init()
{
	gameOver = true;
	windowHeight = 160;

	birdX = 10;
    birdY = 150;
    birdSpeedY = 2;
    grav = 0.1;

    score = 0;

	pipe = [];
    pipe[0] = {
		x : cvs.width,
		y : -100
	}
}

function flappyBird()
{
	if (gameOver === false)
	{
		birdY += birdSpeedY;
		birdSpeedY += grav;
		for (let i = 0; i < pipe.length; i++)
		{
			pipe[i].x--;
			if (pipe[i].x == 75)
			{
				pipe[i + 1] = {
					x : cvs.width,
					y : Math.floor(Math.random() * imgPipeTop.height - imgPipeTop.height)
				}
			}

			if (pipe[i].x < -50)
					pipe.splice(i, 1);

			if (birdX + imgBird.width >= pipe[i].x
				&& birdX <= pipe[i].x + imgPipeTop.width
				&& (birdY <= pipe[i].y + imgPipeTop.height
					|| birdY + imgBird.height >= pipe[i].y + imgPipeTop.height + windowHeight))
			{
				init();
			}

			if (birdX + imgBird.width === pipe[i].x + imgPipeTop.width / 2)
			{
				score += 1;
				soundScore.play();
			}

			if (birdY + imgBird.height >= cvs.height - imgFg.height)
				init();
		}
	}
	draw();
	requestAnimationFrame(flappyBird);
}

function moveUp()
{
	if (gameOver === true)
		gameOver = false;
	
	birdSpeedY = -4;
	soundBird.play();
}

function draw(img, x, y)
{
	ctx.drawImage(imgBg,0,0);
	
	ctx.drawImage(imgBird, birdX, birdY);

	for (let i = 0; i < pipe.length; i++)
	{
		ctx.drawImage(imgPipeTop, pipe[i].x, pipe[i].y);
		ctx.drawImage(imgPipeBottom, pipe[i].x, pipe[i].y + imgPipeTop.height + windowHeight);
	}
ctx.drawImage(imgFg, 0, cvs.height - imgFg.height);
	ctx.fillStyle = "#000";
	ctx.font = "25px Verdana";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 87) {
     moveUp();
  }
});
 
cvs.onclick = moveUp;
imgPipeBottom.onload = flappyBird;