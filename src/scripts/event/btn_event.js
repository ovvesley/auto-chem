'use strict';
import MouseAction from "./scripts/components/MouseAction";
import { drawSimple, drawDupla, drawTripla } from './scripts/functions/ligacoes';
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
    if (mouse.currentClick == "btnDupla"){
        drawDupla(ctx, event.offsetX, event.offsetY);
    }
    if (mouse.currentClick == "btnTripla"){
        drawTripla(ctx, event.offsetX, event.offsetY);
    }    
});

