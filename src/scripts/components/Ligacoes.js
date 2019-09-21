export default class Ligacoes{
    constructor(){
       this.listBonds = new Array(); 
    }
    
    addBonds(bond){
        this.listBonds.push(bond);
    }
}