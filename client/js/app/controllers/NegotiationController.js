class NegotiationController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._NegotiationList = new NegotiationList();
        
    }
  

    add(event) {

        event.preventDefault();

        //add in the list
        this._NegotiationList.add(this._createNegotiation());
        //clean form 
        this._cleanForm();

        console.log(this._NegotiationList.negotiations);
    };

     //create negotiation
    _createNegotiation() {
        return new Negotiation (
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );
    }


    _cleanForm() {
        this._inputDate.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputDate.focus();
    }
    
}


