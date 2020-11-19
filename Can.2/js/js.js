let toolbox = function () {
    let canvas = document.getElementById('myCanvas2');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

    ctx.beginPath();
	ctx.rect(20, 20, 100, 50);
	ctx.strokeStyle = 'grey';
	ctx.linewidth = 1;
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect(90, 90, 80, 90);
	ctx.strokeStyle = 'yellow';
	ctx.linewidth = 1;
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(180, 20, 115, 50);
	ctx.strokeStyle = 'green';
	ctx.linewidth = 1;
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(180, 180, 40, 50);
	ctx.strokeStyle = 'purple';
	ctx.linewidth = 1;
	ctx.stroke();

	
	ctx.beginPath();
	ctx.arc(108, 190, 40 ,0, Math.PI , false);
	ctx.closePath();
	ctx.strokeStyle = 'red';
	ctx.stroke();
	
}
}
toolbox()
window.addEventListener('load', toolbox);


let canvas = document.getElementById('myCanvas2');
let ctx = canvas.getContext("2d");

class Rect {
	constructor(x, y, xx, yy, color){
		this.x = x;
		this.y = y;
		this.xx = xx;
		this.yy = yy;
		this.color = color;
	}
	draw(ctx){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.xx, this.yy);
		ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fill()
		ctx.closePath();
	}
}

let rect = new Rect(180, 180, 40, 50, 'red');
rect.draw(ctx);

document.getElementById("btn").addEventListener("click", btn);
var can = document.getElementById('room')
function btn() {
var width = document.getElementById("w").value
var height = document.getElementById("h").value;
can.style.width = width + "px";
can.style.height = height + "px";
can.style.border = '1px solid black'
}

