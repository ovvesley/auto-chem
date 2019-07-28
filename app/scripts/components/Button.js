'use strict';
class Button extends HTMLButtonElement{
    constructor(button) {
        this.stateClick = Object.freeze({
            unClicked: 0,
            clicked: 1,
        });
        this.button = button;
    };
    clicked(buttonState) {

    };
    droped(buttonState) {

    };
};