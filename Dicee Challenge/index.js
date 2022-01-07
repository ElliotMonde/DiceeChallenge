// JavaScript Document for Dicee Game AppBrewery


var randomNumber1 = Math.floor(6*Math.random()) + 1;
console.log(randomNumber1);
var diceImg1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",diceImg1);

var randomNumber2 = Math.floor(6*Math.random()) + 1;
console.log(randomNumber2);
var diceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",diceImg2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}else if (randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}else if (randomNumber1==randomNumber2){
  document.querySelector("h1").textContent="Draw! Try Again.";
}
console.log(document.querySelector("h1"));