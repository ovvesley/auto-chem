"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Atom =
/*#__PURE__*/
function () {
  function Atom(chemical, oxidation, bonds, position) {
    _classCallCheck(this, Atom);

    this.chemical = chemical;
    this.oxidation = oxidation;
    this.bonds = bonds || [];
    this.charge = 0;
    this.position = position;
  }

  _createClass(Atom, [{
    key: "changeCharge",
    value: function changeCharge() {
      if (this.bonds.length >= this.oxidation) {
        this.charge = this.bonds.length - this.oxidation;
      }
    }
  }, {
    key: "attachAtom",
    value: function attachAtom(atom) {
      this.bonds.push(atom);
      this.changeCharge();
    }
  }]);

  return Atom;
}();

var _default = Atom;
exports["default"] = _default;