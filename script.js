const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

ctx.beginPath();
ctx.arc(580, 275, 250, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(580, 275, 210, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(580, 275, 185, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(580, 275, 150, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(580, 275, 125, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.arc(580, 275, 90, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.clearRect(550, 270, 60, 400);
ctx.fillStyle = "black";
ctx.fillRect(560, 330, 40, 215);

ctx.font = "bold 145px Rotis Semi Serif";
ctx.fillText("ABS-CBN", 325, 660);