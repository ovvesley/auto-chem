'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseAction =
/*#__PURE__*/
function () {
  //Classe responsável pela criação de Ações do Mouse, exemplo, historico de cliques e ultimo clique, botão no qual foi clicado e similares.
  function MouseAction() {
    _classCallCheck(this, MouseAction);

    this.historyClick = new Array();
    this.currentClick;
    this.state;
    this.connections = new Array();
  }

  _createClass(MouseAction, [{
    key: "click",
    value: function click(btn) {
      this.historyClick.unshift(btn);
      this.currentClick = btn;
      console.log(this.currentClick);
    }
  }, {
    key: "saveConnections",
    value: function saveConnections(name, x, y) {
      this.connections.unshift({
        name: name,
        x: x,
        y: y
      });
      console.log(this.connections);
    }
  }]);

  return MouseAction;
}();

exports["default"] = MouseAction;