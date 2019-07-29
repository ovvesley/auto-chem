'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawSimple = drawSimple;
exports.drawTripla = drawTripla;
exports.drawDupla = drawDupla;

function drawSimple(ctx, valorX, valorY) {
  ctx.beginPath();
  ctx.moveTo(valorX, valorY);
  ctx.lineTo(valorX + 100, valorY);
  ctx.stroke();
  ctx.restore();
}

function drawTripla(ctx, valorX, valorY) {
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

function drawDupla(ctx, valorX, valorY) {
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