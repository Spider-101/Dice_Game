var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgsrc1 = "images/dice" + randomNumber1 +".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgsrc2 = "images/dice" + randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src", imgsrc1);
document.querySelector(".img2").setAttribute("src", imgsrc2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="🚩 Player 1 wins!"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent="Player 2 wins! 🚩"
}
else
{
    document.querySelector("h1").textContent="Tie!"
}


