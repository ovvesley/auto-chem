'use strict';
import MouseAction from "./scripts/components/MouseAction";
import { drawSimple, drawDuo, drawTriple, drawButane, erase } from './scripts/functions/ligacoes';

let mouse = new MouseAction();
let ctx = $("#canvas")[0].getContext('2d');



$(".btn-toolbar").click(function(){
    mouse.click(this.id);
});


$("#canvas").click(function(event){
    console.log(mouse.currentClick);
    if (mouse.currentClick == "btnSimple"){  
        drawSimple(ctx, event.offsetX, event.offsetY);     
    }
    else if (mouse.currentClick == "btnDuo"){
        drawDuo(ctx, event.offsetX, event.offsetY);
    }
    else if (mouse.currentClick == "btnTriple"){
        drawTriple(ctx, event.offsetX, event.offsetY);
    } 
    else if (mouse.currentClick == "butane") {
        drawButane(ctx, event.offsetX, event.offsetY);
    }
    else if (mouse.currentClick == "btnEraser") {
        erase(ctx);
    }
});
