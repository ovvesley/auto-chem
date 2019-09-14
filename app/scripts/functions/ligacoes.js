'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawSimple = drawSimple;
exports.drawTriple = drawTriple;
exports.drawDuo = drawDuo;
exports.drawButane = drawButane;
exports.erase = erase;

function drawSimple(ctx, valorX, valorY) {
  ctx.beginPath();
  ctx.moveTo(valorX, valorY);
  ctx.lineTo(valorX + 100, valorY);
  ctx.stroke();
  ctx.restore();
}

function drawTriple(ctx, valorX, valorY) {
  ctx.beginPath();
  ctx.moveTo(valorX, valorY);
  ctx.lineTo(valorX + 100, valorY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(valorX, valorY + 10);
  ctx.lineTo(valorX + 100, valorY + 10);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(valorX, valorY + 20);
  ctx.lineTo(valorX + 100, valorY + 20);
  ctx.stroke();
  ctx.restore();
}

function drawDuo(ctx, valorX, valorY) {
  ctx.beginPath();
  ctx.moveTo(valorX, valorY);
  ctx.lineTo(valorX + 100, valorY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(valorX, valorY + 10);
  ctx.lineTo(valorX + 100, valorY + 10);
  ctx.stroke();
  ctx.restore();
}

function drawButane(ctx, x, y) {
  ctx.beginPath();
  ctx.rect(x, y, 60, 60);
  ctx.stroke();
  ctx.closePath();
}

function erase(ctx) {
  ctx.clearRect(0, 0, 800, 600);
}