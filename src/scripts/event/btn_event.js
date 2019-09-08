'use strict';
import MouseAction from "./scripts/components/MouseAction";
import { drawSimple, drawDuo, drawTriple } from './scripts/functions/ligacoes';
import {SimpleConnection, DuoConnection, TripleConnection} from "./scripts/components/Buttons";

let mouse = new MouseAction();
let ctx = $("#canvas")[0].getContext('2d');


$(".btn-toolbar").click(function(){
    mouse.click(this.id);
});


$("#canvas").click(function(event){
    console.log(mouse.currentClick);
    if (mouse.currentClick == "btnSimple"){       
        let simple = new SimpleConnection(event.offsetX, event.offsetY, ctx);
        simple.draw();
    }
    else if (mouse.currentClick == "btnDuo"){
        let duo = new DuoConnection(event.offsetX, event.offsetY, ctx);
        duo.draw();
    }
    else if (mouse.currentClick == "btnTriple"){
        let triple = new TripleConnection(event.offsetX, event.offsetY, ctx);
        triple.draw();
    } 
});
