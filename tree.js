window.onload = function() {

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
slider1 = document.getElementById("slider1");
slider2 = document.getElementById("slider2");
slider3 = document.getElementById("slider3");
slider4 = document.getElementById("slider4");


ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 1;

_a = -Math.PI/2

setInterval(function() {

a1 = 2*Math.PI*slider1.value*0.01;
a2 = 2*Math.PI*slider2.value*0.01;
s1 = slider3.value*0.002+0.55;
s2 = slider4.value*0.002+0.55;
iters = 12;

ctx.fillStyle = "#000000";
ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.closePath();
ctx.fill();

function draw(x, y, a, s, i) {
	if (i >= 0) {
		var nx = x + Math.cos(a)*s;
		var ny = y + Math.sin(a)*s;
		ctx.moveTo(x, y);
		ctx.lineTo(nx, ny);
		draw(nx, ny, a+a1, s*s1, i-1);
		draw(nx, ny, a+a2, s*s2, i-1);
	}
}

ctx.beginPath();
draw(canvas.width*0.5, canvas.height*0.7, _a, 125, iters);
ctx.closePath();
ctx.stroke();

}, 1000/60);
};
