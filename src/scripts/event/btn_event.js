'use strict';
import MouseAction from "./scripts/components/MouseAction";
import { drawSimple, drawDuo, drawTriple } from './scripts/functions/ligacoes';
import {SimpleConnection, DuoConnection, TripleConnection} from "./scripts/components/Buttons";

let mouse = new MouseAction();
let ctx = $("#canvas")[0].getContext('2d');
let buttonsObjects = new Array;


$(".btn-toolbar").click(function(){
    mouse.click(this.id);
});


$("#canvas").click(function(event){
    console.log(mouse.currentClick);
    if (mouse.currentClick == "btnSimple"){       
        let simple = new SimpleConnection(event.offsetX, event.offsetY, ctx);
        simple.draw();
        buttonsObjects.push(simple);
    }
    else if (mouse.currentClick == "btnDuo"){
        let duo = new DuoConnection(event.offsetX, event.offsetY, ctx);
        duo.draw();
        buttonsObjects.push(duo);
    }
    else if (mouse.currentClick == "btnTriple"){
        let triple = new TripleConnection(event.offsetX, event.offsetY, ctx);
        triple.draw();
        buttonsObjects.push(triple);
    } 

    console.log(buttonsObjects);
});

function redraw(zoom) {
    for (let button of buttonsObjects)
        button.redraw(zoom);
}

let scaleNumber;

$(function() {
    $("#1x").click(() => {
        if (typeof scaleNumber === 'number')
            redraw(1 / scaleNumber);
    });
    $("#2x").click(() => { 
        scaleNumber = 2;
        redraw(scaleNumber);
    });
    $("#3x").click(() => { 
        scaleNumber = 3;
        redraw(scaleNumber); 
    });
    $("#4x").click(() => { 
        scaleNumber = 4;
        redraw(scaleNumber); 
    });
});