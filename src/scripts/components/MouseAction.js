'use strict'
export default class MouseAction {
    //Classe responsável pela criação de Ações do Mouse, exemplo, historico de cliques e ultimo clique, botão no qual foi clicado e similares.
    constructor() {
        this.historyClick = new Array();
        this.currentClick;
        this.state;
        this.connections = new Array();
    }

    click(btn) {
        this.historyClick.unshift(btn);
        this.currentClick = btn;
    }

    saveConnections(name, x, y) {
        this.connections.unshift({
            name,
            x,
            y
        });
        console.log(this.connections);
    }
}