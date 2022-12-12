const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

ctx.beginPath();
ctx.arc(610, 275, 250, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

