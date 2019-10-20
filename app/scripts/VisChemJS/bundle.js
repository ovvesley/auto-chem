"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", {
    value: true
  });
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__atom__ = __webpack_require__(1);

  var canvas,
      context,
      dragging = false,
      dragStartCoords,
      dragStopCoords,
      fillBox,
      snapshot,
      lastAtom;
  var bondType = 'single';
  var structure = [];

  function getStructureCharge() {
    var charge = 0;

    for (var i = 0; i < structure.length; i++) {
      structure[i].changeCharge();
      charge += structure[i].charge;
    }

    return charge;
  }

  function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left;
    var y = event.clientY - canvas.getBoundingClientRect().top;
    return {
      x: x,
      y: y
    };
  }

  function draw(position) {
    if (bondType === "single") {
      drawBond(position);
    }

    if (bondType === "double") {
      drawDoubleBond(position);
    }

    if (bondType === "triple") {
      drawTripleBond(position);
    }

    if (bondType === 'ketone') {
      drawKetone(position);
    }

    if (bondType === 'primaryAmine') {
      drawAmine(position);
    }

    if (bondType === 'secondaryAmine') {
      drawSecondaryAmine(position);
    }

    if (bondType === 'tertiaryAmine') {
      drawTertiaryAmine(position);
    }

    if (bondType === 'alcohol') {
      drawAlcohol(position);
    }

    if (bondType === 'chlorine') {
      drawHalogen(position);
    }

    if (bondType === 'fluorine') {
      drawHalogen(position);
    }

    if (bondType === 'bromine') {
      drawHalogen(position);
    }

    if (bondType === 'cyclohexane') {
      drawCyclohexane(position);
    }

    if (bondType === 'imine') {
      drawImine(position);
    }

    if (bondType === 'benzene') {
      drawBenzene(position);
    }
  }

  function drawBenzene(position) {
    var numberOfSides = 6,
        size = 60,
        Xcenter = position.x,
        Ycenter = position.y;
    context.beginPath();
    context.arc(Xcenter, Ycenter, size / 2, 0, 2 * Math.PI);
    context.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (var i = 1; i <= numberOfSides; i += 1) {
      context.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
      var ring1 = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('C', 1, 0, {
        x: Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides),
        y: Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides)
      }); // let atom1 = [ring1, ring2, ring3, ring4, ring5, ring6];
      //
      // structure.push(...atom1);

      structure.push(ring1);
    }

    context.stroke();
    context.beginPath();
    context.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    context.arc(Xcenter, Ycenter, 25, 0, 2 * Math.pi);
    context.fill();
    context.stroke();
    dragStopCoords = getCanvasCoordinates(event);
  }

  function drawCyclohexane(position) {
    var numberOfSides = 6,
        size = 60,
        Xcenter = position.x,
        Ycenter = position.y;
    context.beginPath();
    context.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (var i = 1; i <= numberOfSides; i += 1) {
      context.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
      var ring1 = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('C', 2, 0, {
        x: Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides),
        y: Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides)
      }); // let atom1 = [ring1, ring2, ring3, ring4, ring5, ring6];
      //
      // structure.push(...atom1);

      structure.push(ring1);
    }

    context.stroke();
    dragStopCoords = getCanvasCoordinates(event);
  }

  function drawHalogen(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }

  function drawAlcohol(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }

  function drawTertiaryAmine(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }

  function drawSecondaryAmine(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }

  function drawAmine(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }

  function drawKetone(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
    context.beginPath();
    context.moveTo(dragStartCoords.x - 10, dragStartCoords.y);
    context.lineTo(position.x - 10, position.y);
    context.stroke();
  }

  function drawImine(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
    context.beginPath();
    context.moveTo(dragStartCoords.x - 10, dragStartCoords.y);
    context.lineTo(position.x - 10, position.y);
    context.stroke();
  }

  function drawTripleBond(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y + 10);
    context.lineTo(position.x, position.y + 10);
    context.stroke();
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y - 10);
    context.lineTo(position.x, position.y - 10);
    context.stroke();
  }

  function drawDoubleBond(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y + 5);
    context.lineTo(position.x, position.y + 5);
    context.stroke();
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y - 5);
    context.lineTo(position.x, position.y - 5);
    context.stroke();
  } // context.beginPath();
  // context.moveTo(dragStartCoords.x + 5, dragStartCoords.y - 5);
  // context.lineTo(position.x + 5, position.y - 5);
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(dragStartCoords.x - 5, dragStartCoords.y + 5);
  // context.lineTo(position.x - 5, position.y + 5);
  // context.stroke();


  function drawBond(position) {
    context.beginPath();
    context.moveTo(dragStartCoords.x, dragStartCoords.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }

  function takeSnapshot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
  }

  function restoreSnapshot() {
    context.putImageData(snapshot, 0, 0);
  }

  function makeAtom(position) {
    // if (!isAtomAtPos(start)) {
    //   let startAtom = new Atom('carbon', 4, 0, start);
    // }
    var atom;

    if (bondType === "single") {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('C', 4, 0, position);
    }

    if (bondType === "double") {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('C', 4, 0, position);
    }

    if (bondType === "triple") {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('C', 4, 0, position);
    }

    if (bondType === 'ketone') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('O', 1, 0, position);
    }

    if (bondType === 'primaryAmine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('N', 1, 0, position);
    }

    if (bondType === 'secondaryAmine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('N', 2, 0, position);
    }

    if (bondType === 'tertiaryAmine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('N', 3, 0, position);
    }

    if (bondType === 'alcohol') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('O', 1, 0, position);
    }

    if (bondType === 'bromine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('Br', 1, 0, position);
    }

    if (bondType === 'chlorine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('Cl', 1, 0, position);
    }

    if (bondType === 'fluorine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('F', 1, 0, position);
    }

    if (bondType === 'cyclohexane') {
      return;
    }

    if (bondType === 'imine') {
      atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
      /* default */
      ]('NH', 1, 0, position);
    }

    if (bondType === 'benzene') {
      return;
    } // atom = new Atom('C', 4, 0, position);


    structure.push(atom);
    console.log(structure);
    return atom;
  }

  function makeCarbon(position) {
    var atom = new __WEBPACK_IMPORTED_MODULE_0__atom__["a"
    /* default */
    ]('C', 4, 0, position);
    structure.push(atom);
    console.log(structure);
    return atom;
  }

  function positionsArray() {
    var positions = [];
    structure.forEach(function (element) {
      positions.push(element.position);
    });
    return positions;
  }

  function isAtomAtPos(pos) {
    for (var i = 0; i < positionsArray().length; i++) {
      if (pos.x <= positionsArray()[i].x + 25 && pos.x >= positionsArray()[i].x - 25 && pos.y <= positionsArray()[i].y + 25 && pos.y >= positionsArray()[i].y - 25) {
        console.log('made it');
        lastAtom = structure[i];
        dragStartCoords = positionsArray()[i];
        return true;
      }
    }

    return false;
  }

  function dragStart(event) {
    dragging = true;
    dragStartCoords = getCanvasCoordinates(event);

    if (bondType !== 'cyclohexane' && bondType !== 'benzene') {
      if (isAtomAtPos(dragStartCoords) === false) {
        makeCarbon(dragStartCoords);
      } else {
        console.log('falsey value');
      }
    }

    if (bondType === 'cyclohexane' || bondType === 'benzene') {
      draw(getCanvasCoordinates(event));
    } else {
      // draw(getCanvasCoordinates(event));
      takeSnapshot();
    }
  }

  function drag(event) {
    if (dragging) {
      if (bondType !== 'cyclohexane' && bondType !== 'benzene') {
        restoreSnapshot();
        var position = getCanvasCoordinates(event);
        draw(position);
      }
    }
  }

  function dragStop(event) {
    dragging = false;

    if (bondType !== 'cyclohexane' && bondType !== 'benzene') {
      restoreSnapshot();
    }

    dragStopCoords = getCanvasCoordinates(event);
    var position = getCanvasCoordinates(event);
    var newAtom = makeAtom(position);

    if (bondType !== 'cyclohexane' && bondType !== 'benzene') {
      if (isAtomAtPos(dragStartCoords)) {
        newAtom.attachAtom(lastAtom);
        lastAtom.attachAtom(newAtom);
      }
    }

    if (bondType !== 'cyclohexane' && bondType !== 'benzene') {
      draw(position);
    }

    console.log(bondType);

    if (bondType === 'ketone') {
      console.log('im in bro');
      context.beginPath(); //  context.arc(dragStopCoords.x, dragStopCoords.y + 10, 10, 0, 2*Math.pi);

      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("O", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("O", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'primaryAmine') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("NH2", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("NH2", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'secondaryAmine') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("NH", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("NH", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'tertiaryAmine') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("N", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("N", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'alcohol') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("OH", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("OH", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'chlorine') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("Cl", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("Cl", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'bromine') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("Br", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("Br", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'fluorine') {
      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("F", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("F", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    if (bondType === 'imine') {
      console.log('im in bro');
      context.beginPath(); //  context.arc(dragStopCoords.x, dragStopCoords.y + 10, 10, 0, 2*Math.pi);

      if (dragStopCoords.y >= dragStartCoords.y) {
        context.font = "20px Georgia";
        context.fillText("NH", dragStopCoords.x - 13, dragStopCoords.y + 18);
        context.stroke();
      } else {
        context.font = "20px Georgia";
        context.fillText("NH", dragStopCoords.x - 13, dragStopCoords.y - 10);
        context.stroke();
      }
    }

    context.beginPath();
    context.fillStyle = 'white';
    context.fillRect(50, 20, 110, 100);
    context.clearRect(50, 20, 110, 100); // context.fillBox();
    // context.stroke();

    context.beginPath();
    context.fillStyle = 'black';
    context.font = "20px Georgia"; // context.fillText(`Charge = -${getStructureCharge()}`, 50 ,50);
    // context.fillText('yes');

    context.stroke();
    console.log(getStructureCharge());
  }

  function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.lineWidth = 4;
    context.lineCap = 'round';
    fillBox = document.getElementById("fillBox");
    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
    document.getElementById("single").addEventListener("click", function () {
      bondType = 'single';
    });
    document.getElementById("double").addEventListener("click", function () {
      bondType = 'double';
    });
    document.getElementById("triple").addEventListener("click", function () {
      bondType = 'triple';
    });
    document.getElementById("ketone").addEventListener("click", function () {
      bondType = 'ketone';
    });
    document.getElementById("primaryAmine").addEventListener("click", function () {
      bondType = 'primaryAmine';
    });
    document.getElementById("secondaryAmine").addEventListener("click", function () {
      bondType = 'secondaryAmine';
    });
    document.getElementById("tertiaryAmine").addEventListener("click", function () {
      bondType = 'tertiaryAmine';
    });
    document.getElementById("alcohol").addEventListener("click", function () {
      bondType = 'alcohol';
    });
    document.getElementById("bromine").addEventListener("click", function () {
      bondType = 'bromine';
    });
    document.getElementById("chlorine").addEventListener("click", function () {
      bondType = 'chlorine';
    });
    document.getElementById("fluorine").addEventListener("click", function () {
      bondType = 'fluorine';
    });
    document.getElementById("cyclohexane").addEventListener("click", function () {
      bondType = 'cyclohexane';
    });
    document.getElementById("benzene").addEventListener("click", function () {
      bondType = 'benzene';
    });
  }

  window.addEventListener('load', init, false);
  /***/
},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

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
  /* harmony default export */


  __webpack_exports__["a"] = Atom;
  /***/
}]);