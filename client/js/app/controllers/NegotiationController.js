class NegotiationController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
    }
  

    add(event) {

        event.preventDefault();

        let negociacao = new Negociacao (
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        console.log(negociacao);
        console.log(DateHelper.dateToText(negociacao.date));


    }
    
}


