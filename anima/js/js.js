'use strict';
import {Canvas} from './canvas.js'
import {Umo} from './umo.js'	


var arr = [];
var canvas;

const redraw = function () {
    canvas.clear();     // clear canvas
    canvas.prep();      // prep canvas with background color
    for (let umo of arr) {
        umo.move();  // change coordinates
        umo.draw();  // draw again with new coordinates
    }
}

const repeater = function () {
    setInterval(redraw, 10);
}

const moveit = function () {
    canvas = new Canvas('canvas', '#ffff88');
    let c0 = new Umo(canvas, '#000088');
    arr.push(c0);
    c0 = new Umo(canvas, '#cc0000');
    arr.push(c0);
    c0 = new Umo(canvas, '#009900');
    arr.push(c0);
    c0 = new Umo(canvas, '#003300');
	arr.push(c0);
	c0 = new Umo(canvas, '#FF5733');
	arr.push(c0);
	c0 = new Umo(canvas, '#33FFFC');
	arr.push(c0);
	c0 = new Umo(canvas, '#EC33FF');
	arr.push(c0);
	c0 = new Umo(canvas, '#FF335B');
	arr.push(c0);
	c0 = new Umo(canvas, '#FFAF33');
	arr.push(c0);
	c0 = new Umo(canvas, '#FFFC33');
    arr.push(c0);
    repeater();
}

window.addEventListener('load', moveit);
