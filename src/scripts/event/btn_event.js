import { erase } from "./scripts/functions/ligacoes";
import { app, remote } from "electron";
const userDataPath = app ? app.getPath("home") : remote.app.getPath("home");
$("#btnEraser").click(function(event) {
  $("#canvas")[0]
    .getContext("2d")
    .clearRect(0, 0, 2000, 2000);
});
$("#btnSave").click(function(event) {
  const fs = require("fs");
  const url = $("#canvas")[0].toDataURL();
  const base64Data = url.replace(/^data:image\/png;base64,/, "");

  console.log("Arquivo salvo em: " + userDataPath);
  fs.writeFile(userDataPath + "/auto-chem.png", base64Data, "base64", function(
    err
  ) {
    console.log(err);
  });
});
