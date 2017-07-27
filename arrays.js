//var choice = [0,1,2,3,4,5,6,7,8,9];
function setup(){
createCanvas(500,500);
}
function draw(){
background(50);

var randomChoice= random(10);
var computersChoice = Math.trunc(randomChoice);

fill(255,0,0);
textSize(40);
consol.log("computersChoice")
/*text(computersChoice,100,100);
var myArray[]={0,1,2,3}
var rand=(var)random(myArray.length);
printIn(myArray[rand]);*/
}
