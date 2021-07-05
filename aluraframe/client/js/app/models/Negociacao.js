class  Negociacao {
    constructor(data, quantidade, valor){

//      CONVENÇÃO UNDERLINE PARA O PROGRAMADOR NÃO ALTERAR O OBJETO | data com o código defensivo para que a data não seja trocada.
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor; 

//      OBJETO SENDO CONGELADO PARA NÃO SER ALTERADO.
        Object.freeze(this);
    }

//  MÉTODO GET PARA IMPIMIR NO CONSOLE PARA TESTES.
    get volume(){
       return  this._quantidade * this._valor;
    }
    get data(){

//      PROGRAMAÇÃO DEFENSIVA
        return new Date(this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}
