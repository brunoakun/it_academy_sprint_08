export class Nave {

    //ATRIBUTOS
    _name: string = '';
    _model: string = ''; 


    //CONSTRUCTOR
    constructor(name: string, model: string) {
        this._name = name;
        this._model = model;
    }

    
    //GETTERS & SETTERS}
    get name() { return this._name; }
    get model() { return this._model; }  

    set name(val) { this._name = val; }
    set model(val) { this._model = val; } 

    //MÉTODOS


}