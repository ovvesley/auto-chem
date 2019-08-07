'use strict';

var _MouseAction = _interopRequireDefault(require("./scripts/components/MouseAction"));

var _ligacoes = require("./scripts/functions/ligacoes");

var _Buttons = require("./scripts/components/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mouse = new _MouseAction["default"]();
var ctx = $("#canvas")[0].getContext('2d');
var buttonsObjects = new Array();
$(".btn-toolbar").click(function () {
  mouse.click(this.id);
});
$("#canvas").click(function (event) {
  console.log(mouse.currentClick);

  if (mouse.currentClick == "btnSimple") {
    var simple = new _Buttons.SimpleConnection(event.offsetX, event.offsetY, ctx);
    simple.draw();
    buttonsObjects.push(simple);
  } else if (mouse.currentClick == "btnDuo") {
    var duo = new _Buttons.DuoConnection(event.offsetX, event.offsetY, ctx);
    duo.draw();
    buttonsObjects.push(duo);
  } else if (mouse.currentClick == "btnTriple") {
    var triple = new _Buttons.TripleConnection(event.offsetX, event.offsetY, ctx);
    triple.draw();
    buttonsObjects.push(triple);
  }

  console.log(buttonsObjects);
});

function redraw(zoom) {
  for (var _i = 0, _buttonsObjects = buttonsObjects; _i < _buttonsObjects.length; _i++) {
    var button = _buttonsObjects[_i];
    button.redraw(zoom);
  }
}

var scaleNumber;
$(function () {
  $("#1x").click(function () {
    if (typeof scaleNumber === 'number') redraw(1 / scaleNumber);
  });
  $("#2x").click(function () {
    scaleNumber = 2;
    redraw(scaleNumber);
  });
  $("#3x").click(function () {
    scaleNumber = 3;
    redraw(scaleNumber);
  });
  $("#4x").click(function () {
    scaleNumber = 4;
    redraw(scaleNumber);
  });
});