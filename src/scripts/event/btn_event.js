'use strict';
import MouseAction from "./scripts/components/MouseAction";
import { drawSimple, drawDuo, drawTriple, drawCicloButane, erase, drawCarbon, drawBenzene, drawCycleHexan } from './scripts/functions/ligacoes';

let mouse = new MouseAction();
let ctx = $("#canvas")[0].getContext('2d');



$(".btn-toolbar").click(function () {
    mouse.click(this.id);
});

$("#carbon").click(function () {
    mouse.click(this.id);
});


$("#canvas").click(function (event) {
    console.log(mouse.currentClick);
    if (mouse.currentClick == "btnSimple") {
        drawSimple(ctx, event.offsetX, event.offsetY);
        mouse.saveConnections("simple", event.offsetX, event.offsetY);
    } else if (mouse.currentClick == "btnDuo") {
        drawDuo(ctx, event.offsetX, event.offsetY);
        mouse.saveConnections("duo", event.offsetX, event.offsetY);
    } else if (mouse.currentClick == "btnTriple") {
        drawTriple(ctx, event.offsetX, event.offsetY);
        mouse.saveConnections("triple", event.offsetX, event.offsetY);
    } else if (mouse.currentClick == "butane") {
        drawCicloButane(ctx, event.offsetX, event.offsetY);
        mouse.saveConnections("simple", event.offsetX, event.offsetY);
    }
    else if (mouse.currentClick == "btnCycleHexan") {
        drawCycleHexan(ctx, event.offsetX, event.offsetY);
        mouse.saveConnections("cycleHexan", event.offsetX, event.offsetY);
    }
    else if (mouse.currentClick == "btnBenzene") {
        drawBenzene(ctx, event.offsetX, event.offsetY);
        mouse.saveConnections("benzene", event.offsetX, event.offsetY);
    }
    else if (mouse.currentClick === "carbon") {
        drawCarbon(ctx, event.offsetX, event.offsetY);
    }
    else if (mouse.currentClick == "btnEraser") {
        erase(ctx);
    }
});