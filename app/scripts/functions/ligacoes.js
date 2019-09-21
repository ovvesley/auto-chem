'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawSimple = drawSimple;
exports.drawDuo = drawDuo;
exports.drawCicloButane = drawCicloButane;
exports.erase = erase;
exports.drawCarbon = drawCarbon;
exports.drawCycleHexan = drawCycleHexan;
exports.drawBenzeno = drawBenzeno;

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

function drawCicloButane(ctx, x, y) {
  ctx.beginPath();
  ctx.rect(x, y, 60, 60);
  ctx.stroke();
  ctx.closePath();
}

function erase(ctx) {
  ctx.clearRect(0, 0, 800, 600);
}

function drawCarbon(ctx, x, y) {
  ctx.beginPath(); //arc(x, y, ray, initialAngle, lastAngle);

  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawCycleHexan(ctx, Xcenter, Ycenter) {
  var numberOfSides = 6,
      size = 40;
  ctx.beginPath();
  ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

  for (var i = 1; i <= numberOfSides; i += 1) {
    ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawBenzeno(ctx, Xcenter, Ycenter) {
  var numberOfSides = 6,
      size = 40;
  ctx.beginPath();
  ctx.arc(Xcenter, Ycenter, size / 2, 0, 2 * Math.PI);
  ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

  for (var i = 1; i <= numberOfSides; i += 1) {
    ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.stroke();
}