const cvs = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(center.x, center.y, 180, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(center.x, center.y, 150, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(center.x, center.y, 125, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(center.x, center.y, 95, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(center.x, center.y, 70, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.arc(center.x, center.y, 40, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.clearRect(725, 200, 50, 190);
ctx.fillStyle = "black";
ctx.fillRect(735, 200, 30, 190);

ctx.font = "bold 70px Rotis Semi Serif";
ctx.fillText("ABS-CBN", 302, 450);
