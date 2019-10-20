"use strict";

var _ligacoes = require("./scripts/functions/ligacoes");

var _electron = require("electron");

var userDataPath = _electron.app ? _electron.app.getPath("home") : _electron.remote.app.getPath("home");
$("#btnEraser").click(function (event) {
  $("#canvas")[0].getContext("2d").clearRect(0, 0, 2000, 2000);
});
$("#btnSave").click(function (event) {
  var fs = require("fs");

  var url = $("#canvas")[0].toDataURL();
  var base64Data = url.replace(/^data:image\/png;base64,/, "");
  console.log("Arquivo salvo em: " + userDataPath);
  fs.writeFile(userDataPath + "/auto-chem.png", base64Data, "base64", function (err) {
    console.log(err);
  });
});