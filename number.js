var choice = [0,1,2,3,4,5,6,7,8,9];
function setup(){
createCanvas(500,500);
randomChoice= Math.random(10);
input=Math.floor(Math.random ()*10)
computersChoice = Math.trunc(input);
bg=loadImage("drawing.png")
winbg=loadImage("dream.png")

 }

function draw(){
	background(bg);
	textSize(50)
	fill(180)
	text("Guess the random number",10,250)

	var users = document.getElementById("user_input").value;

	fill(0,255,0);
	textSize(80);
	fill(0,0,0);
	text(computersChoice, 0,0);
	console.log("computersChoice")

	if ( computersChoice == users ){
		background(winbg)
		fill(0,255,0);
		textSize(80);
		textStyle(BOLD)
		textAlign(CENTER)
		text("you win",250,250)
		fill(255,255,255);
		textSize(15);
		textStyle(BOLD)
		textAlign(CENTER)
		text("Congratulations!",80,80)
		fill(255,255,0);
		textSize(15);
		textStyle(BOLD)
		text("Congratulations!",170,410)
		fill(0,255,255);
		textSize(15);
		textStyle(BOLD)
		text("Congratulations!",400,70)
		fill(255,0,255);
		textSize(15);
		textStyle(BOLD)
		textAlign(CENTER)
		text("Congratulations!",370,460);

	}
	else if(users == ""){
		fill(0,0,255);
		textSize(80);
		textStyle(BOLD)
		textAlign(CENTER)
 		text("input", 250,250);
	}
	else{
	if (computersChoice!=users );
		fill(255,0,0);
		textSize(20);
		textStyle(BOLD)
		textAlign(CENTER)
 		text("try again", 270,270);
		fill(255,0,0);
		textSize(80);
		textStyle(BOLD)
		textAlign(CENTER)
 		text("Failed!", 220,220);

		
		}
		
}
