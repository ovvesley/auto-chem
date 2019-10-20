"use strict";

var _require = require("electron"),
  app = _require.app,
  BrowserWindow = _require.BrowserWindow;

require("electron-reload")(__dirname, {
  electron: require("".concat(__dirname, "/../node_modules/electron"))
});

var win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 768,
   
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("app/index.html");
  win.webContents.openDevTools();
  win.on("closed", function() {
    win = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function() {
  if (win === null) {
    createWindow();
  }
});
