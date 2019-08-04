'use strict';
import MouseAction from "./scripts/components/MouseAction";
import { drawSimple, drawDuo, drawTriple } from './scripts/functions/ligacoes';
let mouse = new MouseAction();
$(".btn-toolbar").click(function(){
    mouse.click(this.id);
});
let ctx = $("#canvas")[0].getContext('2d');

$("#canvas").click(function(event){
    console.log(mouse.currentClick);
    if (mouse.currentClick == "btnSimple"){       
        drawSimple(ctx, event.offsetX, event.offsetY);
    }
    if (mouse.currentClick == "btnDuo"){
        drawDuo(ctx, event.offsetX, event.offsetY);
    }
    if (mouse.currentClick == "btnTriple"){
        drawTriple(ctx, event.offsetX, event.offsetY);
    }    
});

