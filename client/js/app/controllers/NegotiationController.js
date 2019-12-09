class NegotiationController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValor = $('#value');
        this._NegotiationList = new NegotiationList();
        
    }

    add(event) {
        event.preventDefault();
        //add in the list
        this._NegotiationList.add(this._createNegotiation());
        //clean form 
        this._cleanForm();
    }

    //create negotiation
    _createNegotiation() {
        return new Negotiation (
            DateHelper.textToDate(this._inputDate.value),
            this._inputAmount.value,
            this._inputValor.value,
        );
    }

    _cleanForm() {
        this._inputDate.value = '';
        this._inputAmount.value = 1;
        this._inputValor.value = 0.0;
        this._inputDate.focus();
    }
    
}


