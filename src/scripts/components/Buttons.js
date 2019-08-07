"use strict";

class Button {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.canvas = document.getElementById('canvas');
    }
}


export class SimpleConnection extends Button {
    constructor(x, y, ctx) {
        super(x, y, ctx);
    }

    draw() {
        this.ctx.beginPath();    
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + 100, this.y);
        this.ctx.stroke();
        //ctx.restore();
    }

    redraw(zoom) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.scale(zoom, zoom);
        this.draw();
    }
}


export class DuoConnection extends Button {
    constructor(x, y, ctx) {
        super(x, y, ctx);
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + 100, this.y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y + 10);
        this.ctx.lineTo(this.x + 100, this.y + 10);
        this.ctx.stroke();
        //ctx.restore();
    }

    redraw(zoom) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.scale(zoom, zoom);
        this.draw();
    }
}


export class TripleConnection extends Button {
    constructor(x, y, ctx) {
        super(x, y, ctx);
    } 
    
    draw() {
        this.ctx.beginPath() 
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + 100, this.y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y + 10);
        this.ctx.lineTo(this.x + 100, this.y + 10);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y + 20);
        this.ctx.lineTo(this.x + 100, this.y + 20);
        this.ctx.stroke();
        //ctx.restore();
    }

    redraw(zoom) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.scale(zoom, zoom);
        this.draw();
    }
}