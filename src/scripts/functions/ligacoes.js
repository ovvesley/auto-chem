'use strict'
export function drawSimple(ctx,valorX,valorY){ 
    ctx.beginPath();    
    ctx.moveTo(valorX,valorY);
    ctx.lineTo(valorX + 100,valorY);
    ctx.stroke();
    ctx.restore();
}


export function drawTriple(ctx,valorX,valorY){    
    ctx.beginPath(); 
    ctx.moveTo(valorX,valorY);
    ctx.lineTo(valorX + 100,valorY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(valorX,valorY+10);
    ctx.lineTo(valorX + 100,valorY+10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(valorX,valorY+20);
    ctx.lineTo(valorX + 100,valorY+20);
    ctx.stroke();
    ctx.restore();
}


export function drawDuo(ctx,valorX,valorY){     
    ctx.beginPath()
    ctx.moveTo(valorX,valorY);
    ctx.lineTo(valorX + 100,valorY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(valorX,valorY+10);
    ctx.lineTo(valorX + 100,valorY+10);
    ctx.stroke();
    ctx.restore();
}


export function drawCicloButane(ctx, x, y) {
    ctx.beginPath();

    ctx.rect(x, y, 60, 60);

    ctx.stroke();
    ctx.closePath();
}

export function erase(ctx) {
    ctx.clearRect(0, 0, 800, 600);
}


export function drawCarbon(ctx, x, y) {
    ctx.beginPath();
    //arc(x, y, ray, initialAngle, lastAngle);
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}