"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawWhich = drawWhich;

var _ligacoes = require("./scripts/functions/ligacoes");

function drawWhich(mouse) {
  if (mouse.currentClick == "btnSimple") {
    (0, _ligacoes.drawSimple)(ctx, event.offsetX, event.offsetY);
  }

  if (mouse.currentClick == "btnDupla") {
    (0, _ligacoes.drawDupla)(ctx, event.offsetX, event.offsetY);
  }

  if (mouse.currentClick == "btnTripla") {
    (0, _ligacoes.drawTripla)(ctx, event.offsetX, event.offsetY);
  }
}