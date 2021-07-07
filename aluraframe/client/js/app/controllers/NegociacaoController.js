class NegociacaoController {

    constructor(){
 //     Construindo os campos do formulário | diminuindo repetição de código | Convenção nos objetos com  underline
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor')
    }

    adiciona(event){

        event.preventDefault();

//     Criando objeto Date | ...  Significa o desmenbramento do objeto | Retirada do - .
       let data = new Date(...this._inputData.value
        .split('-')
        .map((item, indice) => item - indice % 2) 
       );

       let negociacao = new Negociacao(
        data,
        this._inputQuantidade.value,
        this._inputValor.value
       );
    };
};
