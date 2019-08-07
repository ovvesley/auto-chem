"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TripleConnection = exports.DuoConnection = exports.SimpleConnection = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function Button(x, y, ctx) {
  _classCallCheck(this, Button);

  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.canvas = document.getElementById('canvas');
};

var SimpleConnection =
/*#__PURE__*/
function (_Button) {
  _inherits(SimpleConnection, _Button);

  function SimpleConnection(x, y, ctx) {
    _classCallCheck(this, SimpleConnection);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleConnection).call(this, x, y, ctx));
  }

  _createClass(SimpleConnection, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.x + 100, this.y);
      this.ctx.stroke(); //ctx.restore();
    }
  }, {
    key: "redraw",
    value: function redraw(zoom) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.scale(zoom, zoom);
      this.draw();
    }
  }]);

  return SimpleConnection;
}(Button);

exports.SimpleConnection = SimpleConnection;

var DuoConnection =
/*#__PURE__*/
function (_Button2) {
  _inherits(DuoConnection, _Button2);

  function DuoConnection(x, y, ctx) {
    _classCallCheck(this, DuoConnection);

    return _possibleConstructorReturn(this, _getPrototypeOf(DuoConnection).call(this, x, y, ctx));
  }

  _createClass(DuoConnection, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.x + 100, this.y);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y + 10);
      this.ctx.lineTo(this.x + 100, this.y + 10);
      this.ctx.stroke(); //ctx.restore();
    }
  }, {
    key: "redraw",
    value: function redraw(zoom) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.scale(zoom, zoom);
      this.draw();
    }
  }]);

  return DuoConnection;
}(Button);

exports.DuoConnection = DuoConnection;

var TripleConnection =
/*#__PURE__*/
function (_Button3) {
  _inherits(TripleConnection, _Button3);

  function TripleConnection(x, y, ctx) {
    _classCallCheck(this, TripleConnection);

    return _possibleConstructorReturn(this, _getPrototypeOf(TripleConnection).call(this, x, y, ctx));
  }

  _createClass(TripleConnection, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
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
      this.ctx.stroke(); //ctx.restore();
    }
  }, {
    key: "redraw",
    value: function redraw(zoom) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.scale(zoom, zoom);
      this.draw();
    }
  }]);

  return TripleConnection;
}(Button);

exports.TripleConnection = TripleConnection;